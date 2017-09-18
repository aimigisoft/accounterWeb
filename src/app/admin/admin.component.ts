import{Component,TemplateRef,ViewChild,AfterViewInit,OnInit,ViewEncapsulation} from '@angular/core';
import {NavItem} from   '../models/NavItem';
import{ADMIN_MENU} from './admin-nav';
@Component({
    selector:'admin',
    templateUrl:'./admin.component.html'
})
export class AdminComponent {
    // @ViewChild('tp1') tplRef:TemplateRef<any>;
    // //这是一个视图容器，可以添加一个或者多个视图
    // @ViewChild('tp1', { read: ViewContainerRef }) tplVcRef: ViewContainerRef;

    menus:NavItem[];

    //ngAfterViewInit(){
        // // 页面中的<!--template bindings={}-->元素
        // let commentElement = this.tpl.elementRef.nativeElement;
        // // 创建内嵌视图
        // let embeddedView = this.tpl.createEmbeddedView(null);
        // // 动态添加子节点
        // embeddedView.rootNodes.forEach((node) => {
        //     commentElement.parentNode
        //       .insertBefore(node, commentElement.nextSibling);
        // });
        // console.dir(this.tplVcRef);
        // this.tplVcRef.createEmbeddedView(this.tplRef);
    //}

    ngOnInit(){
        this.menus=ADMIN_MENU;
    }
}

/*

// TemplateRef：用于表示内嵌的 template 模板元素，
通过 TemplateRef 实例，我们可以方便创建内嵌视图(Embedded Views)，
且可以轻松地访问到通过 ElementRef 封装后的 nativeElement。需要注意的是组件视图中的 template 模板元素，经过渲染后会被替换成 comment 元素。

// ViewContainerRef：用于表示一个视图容器，可添加一个或多个视图。通过 ViewContainer
// Ref 实例，我们可以基于 TemplateRef 实例创建内嵌视图，并能指定内嵌视图的插入位置，
也可以方便对视图容器中已有的视图进行管理。简而言之，ViewContainerRef 的主要作用是创建和管理内嵌视图或组件视图。


*/