/**
 * 博客首页推荐排行控件
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-recommendrank',
    templateUrl:'./RecommendRank.component.html'
    
})
export class RecommendRankComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}