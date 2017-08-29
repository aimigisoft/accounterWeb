import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ResultModel } from '../../models/base.model';
import { APPCONFIG } from '../../models/config';
import { User ,UserItemResult,UsersResult} from '../../models/user';

@Injectable()
export class UserService {
    private appConfig = APPCONFIG;
    private headers: Headers;
    private requestHeader: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({
            //'Content-Type': 'application/x-www-form-urlencoded'     
            'Content-Type':'application/json'       
        });

        this.requestHeader = new Headers({
            'Authorization': "Bearer "+sessionStorage.getItem('token')
        });

    }
    
    public currentUser():User{

        let user= JSON.parse(sessionStorage.getItem("CurrentUser")) as User;
        return  user;
    }

    public register(user: User):Observable<ResultModel>{
        let url = this.appConfig.User.registerUrl;
        user.name=user.account;
    
        return this.http.post(url, JSON.stringify(user), { headers: this.headers })
            .map((res: Response) => {
                let result = res.json() as ResultModel;              
                return result;
            });     
     
    }

    public login(username:string,password:string):Observable<string>{
        //请求token
        //用户名密码模式
        let url = this.appConfig.User.loginUrl;
        let param=new URLSearchParams();
        param.set("grant_type","password");
        param.set("username",username);
        param.set("password",password);
        return this.http.post(url, param, { headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'  
        })})
        .map((res: Response) => {               
                let result = res.json() ;
                sessionStorage.setItem("token",result.access_token);   
                return result.access_token;
            });
    }

    save(post: UserItemResult): Observable<ResultModel> {
        let url = this.appConfig.Post.addUrl;
        return this.http.post(url, post, { headers: this.headers })
            .map((res: Response) => {
                let result = res.json() as ResultModel;
                return result;
            });
    }
    update(post: UserItemResult): Observable<ResultModel> {
        let url = this.appConfig.Post.updateUrl;
        return this.http.post(url, post, { headers: this.headers })
            .map((res: Response) => {
                let result = res.json() as ResultModel;
                return result;
            });
    }

    delete(id: string): Observable<ResultModel> {
        let url = this.appConfig.User.deleteUrl;
        let param = new URLSearchParams();
        param.set("id", id);
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as ResultModel;
                return result;
            });
    }
    findOne(id: string,account:string): Observable<UserItemResult> {
        let url = this.appConfig.User.getUrl;
        let param = new URLSearchParams();
        if(id){
            param.append("id", id);
        }
        if(account){
            param.append("account",account);
        }
        
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as UserItemResult;
                return result;
            });
    }
    findList(user: UserItemResult): Observable<UsersResult> {
        let url = this.appConfig.User.getListPageUrl;
        let param = new URLSearchParams();
        // if (post) {
        //     if (post.id) {
        //         param.set("id", post.id);
        //     }
        //     if (post.title) {
        //         param.set("title", post.title);
        //     }
        //     if (post.author) {
        //         param.set("author", post.author);
        //     }
        // }
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as UsersResult;
                console.log(result);
                return result;
            });
    }
   

    findPagelist(user: User, pageNo: number, pageSize: number): Observable<UsersResult> {
        let url = this.appConfig.User.getListPageUrl;
        let param = new URLSearchParams();
        // if (post) {
        //     if (post.id) {
        //         param.set("id", post.id);
        //     }
        //     if (post.title) {
        //         param.set("title", post.title);
        //     }
        //     if (post.author) {
        //         param.set("author", post.author);
        //     }
        // }
        param.set("pageIndex", pageNo.toString());
        param.set("pageSize", pageSize.toString());
        return this.http.get(url, { search: param, headers: this.requestHeader })
            .map((res: Response) => {
                let result = res.json() as UsersResult;
                console.log(result);
                return result;
            });
    }

    
}