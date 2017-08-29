import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import{UserService} from '../services/User';
import {User} from  '../models/user';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  providers:[UserService]
  
})
export class UserRegisterComponent implements OnInit {

  public userForm: FormGroup;
  public userInfo: User = new User();

  public formErrors = {
    'account': '',
    'nickname': '',    
    'password': '',
    'confirmpassword': '',
    'formError': ''    
  };
  validationMessages = {
    'account': {
      'required': '用户名必须输入。',
      'minlength': '用户名4到32个字符。'
    },
    'nickname': {
      'required': '昵称必须输入。',
      'minlength': '昵称2到32个字符。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
    'confirmpassword': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'validateEqual': "两次输入的密码不一致。"
    }
  };

  constructor(public fb: FormBuilder,
              public userRegisterService: UserService,
              public router: Router,
              public route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      "account": [
        this.userInfo.account,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      "nickname": [
        this.userInfo.nickname,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]
      ],
      
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ]
      
      
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  doRegister() {
    if (this.userForm.valid) {
      this.userInfo = this.userForm.value;
      this.userRegisterService.register(this.userInfo)
        .subscribe(
          data => {
            if(data.code=="0"){
              alert('注册成功，跳转到登录页')
              this.router.navigateByUrl("login");
            }
           
          },
          error => {
            this.formErrors.formError = error.message;
            console.error(error);
          }
        );
    } else {
      this.formErrors.formError = "存在不合法的输入项，请检查。";
    }
    console.log(this.userInfo);
  }

 
}
