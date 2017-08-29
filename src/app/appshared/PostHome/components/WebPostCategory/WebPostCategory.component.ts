import{Component,OnInit,ViewEncapsulation} from '@angular/core';


import{PostItem} from '../../../../models/blog';

@Component({   
    selector:'home-postcategory',
    templateUrl:'./WebPostCategory.component.html'
})
export class WebPostCategoryComponent implements OnInit{

    items:PostItem[];
    
    constructor(){}
    ngOnInit(){      
      
         //this.username=this.router.snapshot.params["user"];
        //this.postId = +this.route.snapshot.params['id'];
    }

}