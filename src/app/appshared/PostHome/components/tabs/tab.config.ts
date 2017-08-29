import { Injectable } from '@angular/core';

@Injectable()
export class TabsetConfig {
  //给浏览器注入一个可以识别的标签
  public type: string = 'tabs';
}