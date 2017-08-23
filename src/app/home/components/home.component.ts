import{Component,OnInit,ViewEncapsulation,Input} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';


import {UserService} from '../../services/User';
import{PostService} from '../../services/Post';
import{User}from '../../models/user'
import {PostSummay} from '../../models/blog';

@Component({   
    templateUrl:'./home.component.html',
    encapsulation:ViewEncapsulation.None
    
})
export class HomePageComponent implements OnInit{

    username:string;
    CurrentUser:User;
    
    blogsummarylist:PostSummay[];

    @Input() totalItems:number=500;
    @Input() currentPage:number=3;

    maxSize:number=5;

    constructor(private router:Router,
        private activatedRoute:ActivatedRoute,
        private userService:UserService,
        private postService:PostService
    ){}
    ngOnInit(){      
      
         //this.username=this.router.snapshot.params["user"];
        //this.postId = +this.route.snapshot.params['id'];
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);


        this.CurrentUser=this.userService.currentUser();
        this.getData();
    }


    getData(){
        this.postService.getSummaryPageList("newest",1,10).subscribe(res=>{
            this.blogsummarylist=res.data;
        })
    }

}