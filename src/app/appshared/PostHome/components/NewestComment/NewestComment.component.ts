/**
 * 博客首页最新评论列表
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-newestcomment',
    templateUrl:'./NewestComment.component.html'
    
})
export class NewestCommentComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}