

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { postroutes } from './userpost.routing';
import { 
  PostHomePageComponent,
  PostInfoPageComponent } from './pages';

import {PostHomeSharedModule} from '../appshared/PostHome/PostHomeShared.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PostHomeSharedModule,
    RouterModule.forChild(postroutes)

  ],
  declarations: [
    PostHomePageComponent,
    PostInfoPageComponent
  ]
})
export class UserPostModule {
}
