/**
 * 博客首页用户标签组件
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-userposttags',
    templateUrl:'./UserPostTags.component.html'
    
})
export class UserPostTagsComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}