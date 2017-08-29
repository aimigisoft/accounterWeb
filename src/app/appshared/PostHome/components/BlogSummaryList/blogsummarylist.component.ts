import{Component,OnInit,ViewEncapsulation,Input} from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/router';

import{PostSummay} from '../../../../models/blog';

@Component({   
    selector:'home-blogsummaylist',
    templateUrl:'./blogsummarylist.component.html'
})
export class BlogSummaryListComponent implements OnInit{

    @Input() items:PostSummay[];
    @Input() type:string;
    
  
    constructor(){}
    ngOnInit(){     
      
       
    }

    pageChanged(event:any){
        console.log(event.page);
    }

}