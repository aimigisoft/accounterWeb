/**
 * 博客首页文章详情
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-postdetail',
    templateUrl:'./PostDetail.component.html'
    
})
export class PostDetailComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}