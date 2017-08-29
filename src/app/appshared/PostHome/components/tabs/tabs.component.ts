import { Component, HostBinding, Input, OnDestroy } from '@angular/core';

import { TabDirective } from './tab.directive';
import {TabsetConfig} from './tab.config';

@Component({
  selector: 'tabset',
  template: `
    <ul [ngClass]="classMap" (click)="$event.preventDefault()">
        <li *ngFor="let tabz of tabs" [ngClass]="[ tabz.customClass || '']" (click)="tabz.active = true"
          [class.active]="tabz.active" [class.disabled]="tabz.disabled"> {{tabz.heading}}         
        </li>
    </ul>
    <div class="tab-cont" >
      <ng-content></ng-content>
    </div>
  `
})
export class TabsetComponent implements OnDestroy {
 
   
  @HostBinding('class.tab-cont1') public clazz:boolean = true;

  public tabs:TabDirective[] = [];
  public classMap:any = {};

  protected isDestroyed:boolean;
  protected _vertical:boolean;
  protected _justified:boolean;
  protected _type:string;

  public constructor(config: TabsetConfig) {
    Object.assign(this, config);
  }

  public ngOnDestroy():void {
    this.isDestroyed = true;
  }

  public addTab(tab:TabDirective):void {
    this.tabs.push(tab);
    tab.active = this.tabs.length === 1 && tab.active !== false;
  }

  

  protected setClassMap():void {
    
  }
}
