import{Component,OnInit,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/router';
import {PostService} from '../../../services/Post';
import{PostItem} from '../../../models/blog';

@Component({   
    selector:'home-toppost',
    templateUrl:'./TopPost.component.html',
    styleUrls:['./TopPost.component.css']
})
export class HomeTopPostComponent implements OnInit{

    items:PostItem[];
    
    constructor(private postService:PostService ){}
    ngOnInit(){      
      
         this.postService.findHotList(4).subscribe(res=>{
             this.items=res.data;
         });
    }

}