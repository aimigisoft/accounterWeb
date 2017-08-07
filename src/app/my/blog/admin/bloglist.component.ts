import{Component,OnInit,Input} from '@angular/core';
import{PostItem} from '../../../models/blog/';
import {BlogService} from '../service';

@Component({
    selector:'my-admin-bloglist',
    templateUrl:'./bloglist.component.html'

})
export class BlogListComponent implements OnInit{
    posts:PostItem[]
    constructor(private blogService:BlogService){}

    @Input() pageSize: number = 10;
    @Input() totalItems: number = 0;
    @Input() currentPageNo: number = 1;

    ngOnInit(){
        this.blogService.findPagelist(null,this.currentPageNo,this.pageSize).subscribe(res=>{
            this.posts=res.data;
            this.totalItems=res.count;
        });
    }
    
}