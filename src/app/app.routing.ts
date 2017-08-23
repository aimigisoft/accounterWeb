import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';
import {UserRegisterComponent} from './register';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
   { path: 'my', loadChildren: './my/my.module#UserCenterModule' },
  { path: 'u', loadChildren: './post/userpost.module#UserPostModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register',component: UserRegisterComponent},
];
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
