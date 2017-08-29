

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import{PostHomeSharedModule} from  '../appshared/PostHome/PostHomeShared.module'

import { routing } from './home.routing';
import { 
  HomePageComponent,
  HomeTopPostComponent,
  
   } from './components';

//import {PostHomeSharedModule} from '../appshared/PostHome/PostHomeShared.module';

import{PostService} from '../services/Post';
import{UserService} from '../services/User';



@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    PostHomeSharedModule,
    PaginationModule.forRoot(),
    routing

  ],
  declarations: [
    HomePageComponent,
    HomeTopPostComponent,
   
  ],
  providers:[
    PostService,
    UserService
  ]
})
export class HomeModule {
}
