import { Routes, RouterModule }  from '@angular/router';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';

import{DictionaryComponent} from './dictionary';

export const routes: Routes = [ 
  {
    path: '',
    component: AdminComponent,
    data: {
      title: '后台管理'
    },
    children: [
      { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dic',data:{ title:"字典管理"}, component: DictionaryComponent },
      
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
