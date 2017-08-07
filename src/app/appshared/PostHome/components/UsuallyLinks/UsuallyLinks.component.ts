/**
 * 博客首页--常用链接
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-usuallylinks',
    templateUrl:'./UsuallyLinks.component.html'
    
})
export class UsuallyLinksComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}