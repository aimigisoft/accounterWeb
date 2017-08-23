import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './login.routing';
import { LoginComponent } from './login.component';
import { UserService } from '../services/User';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class LoginModule {

}
