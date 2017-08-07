import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BlogHomeComponent } from './blog.component';
import { BlogAdminHomeComponent,BlogListComponent } from './admin';
import { AddBlogComponent } from './addPost';
import { UpdateBlogComponent } from './updatePost';

export const routes: Routes = [
    {
        path: '',
        component: BlogHomeComponent
    },
    {
        path: 'admin',
        component: BlogAdminHomeComponent,
        children: [
             {
                path: '',
                component: BlogListComponent
            },
            {
                path: 'add',
                component: AddBlogComponent
            },
            {
                path: 'update',
                component: AddBlogComponent
            },
        ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

