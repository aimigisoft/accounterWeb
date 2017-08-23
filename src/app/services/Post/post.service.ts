import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ResultModel } from '../../models/base.model';
import { PostItem, PostsResult, PostItemResult,
    PostSummayListResult
} from '../../models/blog';
import { APPCONFIG } from '../../models/config';


@Injectable()
export class PostService {
    private appConfig = APPCONFIG;
    private headers: Headers;
    private requestHeader: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': "Bearer "+sessionStorage.getItem('token')
        });

        this.requestHeader = new Headers({
            'Authorization': "Bearer "+sessionStorage.getItem('token')
        });

    }

    save(post: PostItem): Observable<ResultModel> {
        let url = this.appConfig.Post.addUrl;
        return this.http.post(url, post, { headers: this.headers })
            .map((res: Response) => {
                let result = res.json() as ResultModel;
                return result;
            });
    }
    update(post: PostItem): Observable<ResultModel> {
        let url = this.appConfig.Post.updateUrl;
        return this.http.post(url, post, { headers: this.headers })
            .map((res: Response) => {
                let result = res.json() as ResultModel;
                return result;
            });
    }

    delete(id: string): Observable<ResultModel> {
        let url = this.appConfig.Post.deleteUrl;
        let param = new URLSearchParams();
        param.set("id", id);
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as ResultModel;
                return result;
            });
    }
    findOne(id: string): Observable<PostItemResult> {
        let url = this.appConfig.Post.getUrl;
        let param = new URLSearchParams();
        param.set("id", id);
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as PostItemResult;
                return result;
            });
    }
    findList(post: PostItem): Observable<PostsResult> {
        let url = this.appConfig.Post.getListPageUrl;
        let param = new URLSearchParams();
        if (post) {
            if (post.id) {
                param.set("id", post.id);
            }
            if (post.title) {
                param.set("title", post.title);
            }
            if (post.author) {
                param.set("author", post.author);
            }
        }
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as PostsResult;
                console.log(result);
                return result;
            });
    }
    findHotList(pageSize:number): Observable<PostsResult> {
        let url = this.appConfig.Post.getHotListUrl;
        let param = new URLSearchParams();
        param.set("pageSize", pageSize.toString());       
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as PostsResult;
                console.log(result);
                return result;
            });
    }

    findPagelist(post: PostItem, pageNo: number, pageSize: number): Observable<PostsResult> {
        let url = this.appConfig.Post.getListPageUrl;
        let param = new URLSearchParams();
        if (post) {
            if (post.id) {
                param.set("id", post.id);
            }
            if (post.title) {
                param.set("title", post.title);
            }
            if (post.author) {
                param.set("author", post.author);
            }
        }
        param.set("pageIndex", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as PostsResult;              
                return result;
            });
    }

    getSummaryPageList(type:string,pageNo:number,pageSize:number): Observable<PostSummayListResult> {
        let url = this.appConfig.Post.getSummaryListUrl;
        let param = new URLSearchParams();
        param.set("type",type);
        param.set("pageIndex", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as PostSummayListResult;               
                return result;
            });
    }

    


}