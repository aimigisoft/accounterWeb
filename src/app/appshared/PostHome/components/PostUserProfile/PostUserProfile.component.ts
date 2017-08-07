import{Component,OnInit,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-userprofile',
    templateUrl:'./PostUserProfile.component.html'
    
})
export class PostUserProfileComponent implements OnInit{

    
    
    ngOnInit(){      
      
         //this.postId=this.activeRoute.snapshot.params["id"];
        //this.postId = +this.route.snapshot.params['id'];
    }

}