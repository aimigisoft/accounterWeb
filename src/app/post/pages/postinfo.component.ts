import{Component,OnInit} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/router';

@Component({    
    templateUrl:'./postinfo.component.html',
    
})
export class PostInfoPageComponent implements OnInit{

    postId:number;
    constructor(private route:Router,private router:ActivatedRoute){}
    ngOnInit(){      
      
         this.postId=+this.router.snapshot.params["id"];
        //this.postId = +this.route.snapshot.params['id'];
    }

}