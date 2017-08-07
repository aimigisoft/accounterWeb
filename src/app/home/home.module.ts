

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { routing } from './home.routing';
import { 
  HomePageComponent,
  HomeTopPostComponent,
  WebPostCategoryComponent
   } from './components';

//import {PostHomeSharedModule} from '../appshared/PostHome/PostHomeShared.module';

import{PostService} from '../services/Post';



@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    routing

  ],
  declarations: [
    HomePageComponent,
    HomeTopPostComponent,
    WebPostCategoryComponent 
  ],
  providers:[
    PostService
  ]
})
export class HomeModule {
}
