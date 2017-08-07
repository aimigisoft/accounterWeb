import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserCenterHomeComponent } from './home';


export const routes: Routes = [ 
  {
    path: '',
    component: UserCenterHomeComponent    
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule' 
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

