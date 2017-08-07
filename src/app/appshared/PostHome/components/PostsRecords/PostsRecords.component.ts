/**
 * 博客首页文章档案组件
 */
import{Component,OnInit,Input,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-records',
    templateUrl:'./PostsRecords.component.html'
    
})
export class PostsRecordsComponent implements OnInit{  
    @Input() UserName:string;
    ngOnInit(){            
         
    }

}