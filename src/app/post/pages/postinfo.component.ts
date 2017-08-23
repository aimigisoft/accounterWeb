import{Component,OnInit} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/router';
import{PostItem} from '../../models/blog';
import{PostService} from '../../services/post';

@Component({    
    templateUrl:'./postinfo.component.html',
    
})
export class PostInfoPageComponent implements OnInit{

    postId:number;
    postModel:PostItem;
    constructor(private route:Router,
        private router:ActivatedRoute,
        private postService:PostService
    ){}
    ngOnInit(){  
         this.postId=+this.router.snapshot.params["id"];
        //this.postId = +this.route.snapshot.params['id'];
        this.getPostDetail();
    }

    getPostDetail(){
        this.postService.findOne(this.postId.toString()).subscribe(res=>{
            console.log(res);
            this.postModel=res.data;
        });
    }

}