/**
 * 博客首页评论排行控件
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-commentrank',
    templateUrl:'./CommentRank.component.html'
    
})
export class CommentRankComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}