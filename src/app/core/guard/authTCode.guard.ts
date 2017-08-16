// Internal
import { BcUtilsService } from '../../theme/services/bcUtils';

import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthTCodeGuard implements CanActivate, CanActivateChild {

    constructor(
      private router: Router,
      private utilsService: BcUtilsService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // check if userRights include tcode
            const urls = state.url.split('/');
            const tcode = this.utilsService.encode(urls[4]);
            // console.log(urls);
            const tcodes = this.utilsService.getMana();
            const check = this.utilsService.checkElementInArray(tcode, tcodes);
            console.log(`User privilege to ${urls[4]} is: ${check}`);

            if (check) {
                return true;
            }
        }

        // tcode is not granted in so redirect to error page 500
        this.router.navigate(['/pages/err01']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem('currentUser')) {
            // check if userRights include tcode
            console.log(this.utilsService.getMana());
            return true;
        }

        // tcode is not granted in so redirect to error page 500
        this.router.navigate(['/pages/err01']);
        return false;
    }
}
