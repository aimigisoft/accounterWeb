import { Component,ViewEncapsulation } from '@angular/core';
import{Router, ActivatedRoute, Params, NavigationExtras}from '@angular/Router';

import { Observable } from 'rxjs/rx';

@Component({
  selector: 'app',
  template: `  
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app works!';

}
