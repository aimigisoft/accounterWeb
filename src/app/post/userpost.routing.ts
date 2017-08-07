import { Routes, RouterModule, Router,ActivatedRoute } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PostHomePageComponent,PostInfoPageComponent } from './pages';

export const postroutes = [
  {
    path: ':user',
    component: PostHomePageComponent,
    children: [
      {
        path: ':id',
        component: PostInfoPageComponent
      }
    ]
  }
];
