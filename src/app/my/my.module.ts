import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './my.routing';



import { UserCenterHomeComponent } from './home';



@NgModule({
  imports: [
    CommonModule,
    routing,
    ],
  declarations: [UserCenterHomeComponent]
})
export class UserCenterModule {
}
