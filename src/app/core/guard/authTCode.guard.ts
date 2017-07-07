import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthTCodeGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // check if userRights include tcode
            return true;
        }

        // tcode is not granted in so redirect to error page 500
        this.router.navigate(['/pages/page500']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // check if userRights include tcode
            return true;
        }

        // tcode is not granted in so redirect to error page 500
        this.router.navigate(['/pages/page500']);
        return false;
    }
}
