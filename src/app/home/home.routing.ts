import { Routes, RouterModule, Router,ActivatedRoute } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HomePageComponent} from './components';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);