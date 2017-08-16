// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mje-00',
  templateUrl: './mje00.html',
  styleUrls: ['./mje00.scss'],
})

export class Mje00 implements OnInit {

  /*****************************************************************************
   * TCODE TEMPORARY VARIABLES
   * prefix:        Prefix of tcode
   * collapse:      UI for processing and datatable action
   * rights:        User system rights
   *****************************************************************************/

  prefix: string = 'mje';
  // currentUrl: string = '';
  collapse: boolean = true;
  rights: Array<any>;

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    // Track user's visit
    this.utilsService.trackHistory();

    // const currentUser: any = this.utilsService.getCurrentUser();
    // this.rights = currentUser.rights;
    this.rights = this.utilsService.getMana();
    console.log(this.rights);
  }

  toggleCollapse() {
    this.collapse = !this.collapse;
    // this.utilsService.setCollapsePref(this.collapse);
  }

}
