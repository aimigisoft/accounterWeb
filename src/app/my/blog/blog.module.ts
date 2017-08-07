import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { routing } from './blog.routing';


import { BlogHomeComponent } from './blog.component';
import { 
    BlogAdminHomeComponent,
    BlogListComponent } from './admin';
import{AddBlogComponent} from './addPost';
import{UpdateBlogComponent} from './updatePost';


import {BlogService} from './service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        BlogHomeComponent,
        BlogListComponent,
        BlogAdminHomeComponent,
        AddBlogComponent,
        UpdateBlogComponent
    ],
    providers:[
        BlogService
    ]
})
export class BlogModule {
}
