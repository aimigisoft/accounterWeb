import{User} from '../user';
import{ ResultModel} from '../base.model'

export class PostSummay{
    id:string;    
    title:string;
    subtitle:string;
    summary:string;
    webCategoryName:string;
    like:number;
    comments:number;
    reads:number;
    User:User;
    pubDate:string;
}

export class PostSummayListResult extends ResultModel{
    data:PostSummay[];
    count:number;
}