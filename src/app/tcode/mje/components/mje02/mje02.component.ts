import { AuthenticationService } from '../../../../core/services/authentication.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-02',
  templateUrl: './mje02.html',
  styleUrls: ['./mje02.scss'],
})

export class Mje02 implements OnInit, OnDestroy {
  lgeList: Array<any>;
  lge: string;
  id: string;
  returnUrl: string = '';
  tcode: string = 'mje02';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    const currentUser: any = this.authenticationService.getCurrentUser();
    this.lgeList = currentUser.lge;
    this.lge = currentUser.defaultLge;

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.returnUrl = params['returnUrl'];
      });
  }

  ngOnDestroy() {
    // activatedRoute is an exception that do not need to manually unscribe
  }

}
