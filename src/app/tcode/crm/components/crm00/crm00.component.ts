// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-00',
  templateUrl: './crm00.html',
  styleUrls: ['./crm00.scss'],
})

export class Crm00 implements OnInit {

  /*****************************************************************************
   * TCODE TEMPORARY VARIABLES
   * prefix:        Prefix of tcode
   * collapse:      UI for processing and datatable action
   * rights:        User system rights
   *****************************************************************************/

  prefix: string = 'crm';
  // currentUrl: string = '';
  collapse: boolean = true;
  rights: Array<any>;

  public systemImagePath: string = '../../../../assets/images/system/';
  
  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    // Track user's visit
    this.utilsService.trackHistory();

    const currentUser: any = this.utilsService.getCurrentUser();
    this.rights = currentUser.rights;
  }

  toggleCollapse() {
    // this.collapse = !this.collapse;
    // this.utilsService.setCollapsePref(this.collapse);
  }

}
