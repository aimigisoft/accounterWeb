/**
 * 博客首页用户分类控件
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-userpostcategory',
    templateUrl:'./UserPostCategory.component.html'
    
})
export class UserPostCategoryComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}