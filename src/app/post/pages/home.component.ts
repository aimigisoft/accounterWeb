import{Component,OnInit,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/router';

@Component({   
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css'],
    encapsulation:ViewEncapsulation.None
    
})
export class PostHomePageComponent implements OnInit{

    username:string;
    
    constructor(private route:Router,private router:ActivatedRoute){}
    ngOnInit(){      
      
         this.username=this.router.snapshot.params["user"];
        //this.postId = +this.route.snapshot.params['id'];
    }

}