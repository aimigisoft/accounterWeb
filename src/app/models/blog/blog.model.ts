export class PostItem{
    id:string;    
    title:string;
    subtitle:string;
    summary:string;
    content:string;
    myCategoryId:string;
    publishStatus:string;
    publishOption:string;
    webCategoryId:string;
    tags:string[];
    sort:number;
    createDate:string;
    updateDate:string;
    author:string;
    source:string;
}
export class PostItemResult{
    code:string;
    msg:string;   
    data:PostItem;

}


export class PostsResult{
    code:string;
    msg:string;
    count:number;
    data:PostItem[];

}