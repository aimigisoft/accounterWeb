/**
 * 博客首页阅读排行控件
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-readrank',
    templateUrl:'./ReadRank.component.html'
    
})
export class ReadRankComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}