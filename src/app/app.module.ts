import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CommonModule} from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { Routes, RouterModule ,Router} from '@angular/router';
import {UserRegisterComponent} from './register';
//import{PostModule} from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    CommonModule,
    AppRoutingModule,  
    ReactiveFormsModule,  
  ], 
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
