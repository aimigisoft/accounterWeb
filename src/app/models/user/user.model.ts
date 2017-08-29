export class User{
    id:string;    
    uid:string;
    name:string;
    nickname:string;
    password:string;
    isAdmin:boolean;
    account:string;
    photo:string;
    fans:number;
    export:string;
}
export class UserItemResult{
    code:string;
    msg:string;   
    data:User;

}


export class UsersResult{
    code:string;
    msg:string;
    count:number;
    data:User[];

}