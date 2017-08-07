import{Component,OnInit,ViewEncapsulation} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

@Component({
    selector:'post-calendar',
    templateUrl:'./PostCalendar.component.html',
    styleUrls:['./PostCalendar.component.css']
    
})
export class PostCalendarComponent implements OnInit{    
    
    ngOnInit(){      
      
         //this.postId=this.activeRoute.snapshot.params["id"];
        //this.postId = +this.route.snapshot.params['id'];
    }

}