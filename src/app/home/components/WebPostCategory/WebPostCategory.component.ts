import{Component,OnInit,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/router';
import {PostService} from '../../../services/Post';
import{PostItem} from '../../../models/blog';

@Component({   
    selector:'home-postcategory',
    templateUrl:'./WebPostCategory.component.html'
})
export class WebPostCategoryComponent implements OnInit{

    items:PostItem[];
    
    constructor(private route:Router,private router:ActivatedRoute){}
    ngOnInit(){      
      
         //this.username=this.router.snapshot.params["user"];
        //this.postId = +this.route.snapshot.params['id'];
    }

}