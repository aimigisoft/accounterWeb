
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Params, RouterState, RouterStateSnapshot, NavigationExtras } from '@angular/Router';

@Component({
    selector: 'router-nav',
    templateUrl: './routernav.component.html'

})
export class RouterNavComponent implements OnInit {

    ngOnInit() {}
    // constructor(private router: Router,
    //     private activatedRoute: ActivatedRoute,

    // ) { }
    // ngOnInit() {

    //     //this.username=this.router.snapshot.params["user"];
    //     //this.postId = +this.route.snapshot.params['id'];
    //     let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    //     let routerState: RouterState = this.router.routerState;
    //     let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    //     console.log(activatedRouteSnapshot);
    //     console.log(routerState);
    //     console.log(routerStateSnapshot);
    // }


}