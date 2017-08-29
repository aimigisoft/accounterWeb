import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MyIndexComponent } from './my.component';
import {MyUserCenterComponent} from './UserCenter';
import{MyHomeComponent} from './home';
import{MyBlogComponent} from './blog';
import {AddBlogComponent} from './addPost';
export const routes: Routes = [  
  {
    path: '',
    component: MyIndexComponent,  
    children:[
      {
        path: 'home',
        component:MyHomeComponent
      },
      {
        path: 'center',
        component:MyUserCenterComponent
      },
      {
        path:'blog',
        component:MyBlogComponent
      },
      {
        path:'addpost',
        component:AddBlogComponent
      }
    ]  
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

