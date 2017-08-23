import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/User';
import { User } from '../models/user';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

    account:string;
    password:string;
    
    constructor(
        public userService: UserService,
        public router: Router,
        public route: ActivatedRoute, ) {
    }
    ngOnInit(){
        
    }

    login(event: any) {
        this.userService.login(this.account,this.password).subscribe(x=>{
            if(x){
                this.userService.findOne("",this.account).subscribe(res=>{
                    if(res.code=="0"){
                        sessionStorage.setItem("CurrentUser",JSON.stringify(res.data));
                        this.router.navigateByUrl("home");
                    }
                });
            }else{
                alert('登录失败！');
            }
        });       
    }
    register(event: any) {
        this.router.navigateByUrl("register");
    }
}