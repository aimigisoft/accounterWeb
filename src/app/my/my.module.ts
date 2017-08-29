import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './my.routing';
import { PaginationModule } from 'ng2-bootstrap';


import { MyIndexComponent } from './my.component';
import{MyHomeComponent} from './home';
import { MyUserCenterComponent } from './UserCenter'
import { MyBlogComponent } from './blog';
import { PostHomeSharedModule } from '../appshared/PostHome/PostHomeShared.module';
import{BlogListComponent} from './bloglist'
import {AddBlogComponent} from './addPost';

import{PostService} from '../services/Post';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    PostHomeSharedModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    MyIndexComponent,
    MyUserCenterComponent,
    MyBlogComponent,
    MyHomeComponent,
    BlogListComponent,
    AddBlogComponent
  ],
  providers:[PostService]
})
export class UserCenterModule {
}
