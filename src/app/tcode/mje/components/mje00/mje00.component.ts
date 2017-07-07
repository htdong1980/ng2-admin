import { AuthenticationService } from '../../../../core/services/authentication.service';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mje-00',
  templateUrl: './mje00.html',
  styleUrls: ['./mje00.scss'],
})

export class Mje00 implements OnInit {

  prefix: string = 'mje';
  currentUrl: string = '';

  private rights: Array<any>;   // user rights

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.currentUrl = this.router.url;

    const currentUser: any = this.authenticationService.getCurrentUser();
    this.rights = currentUser.rights;
    // console.log(this.rights);
  }

}
