

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import { routing } from './home.routing';
import { 
  HomePageComponent,
  HomeTopPostComponent,
  WebPostCategoryComponent,
  BlogSummaryListComponent,
  ContactUsComponent,
  ExpertRankComponent,
  KnowledgeBaseRankComponent
   } from './components';

//import {PostHomeSharedModule} from '../appshared/PostHome/PostHomeShared.module';

import{PostService} from '../services/Post';
import{UserService} from '../services/User';



@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    PaginationModule.forRoot(),
    routing

  ],
  declarations: [
    HomePageComponent,
    HomeTopPostComponent,
    WebPostCategoryComponent,
    BlogSummaryListComponent ,
    ContactUsComponent,
    ExpertRankComponent,
    KnowledgeBaseRankComponent
  ],
  providers:[
    PostService,
    UserService
  ]
})
export class HomeModule {
}
