import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { routing }       from './admin.routing';


import { AdminComponent } from './admin.component';


import { 
  AdminBreadcrumb,
  AdminFooter,
  AdminHeader,
  AdminSidebar,
  AdminAside
}
from './components';

import {
  SIDEBAR_TOGGLE_DIRECTIVES,
  NAV_DROPDOWN_DIRECTIVES,
  AsideToggleDirective
}
from './directives';

import { PostHomeSharedModule } from '../appshared/PostHome/PostHomeShared.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';


import{DictionaryComponent} from './dictionary';
@NgModule({
  imports: [
    CommonModule, 
    routing,
    PostHomeSharedModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    AdminBreadcrumb,
    AdminFooter,
    AdminHeader,
    AdminSidebar,
    AdminAside,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    AsideToggleDirective,
    DictionaryComponent
  ]
})
export class AdminModule {
}
