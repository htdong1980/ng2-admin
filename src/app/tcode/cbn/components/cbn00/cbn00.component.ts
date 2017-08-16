// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cbn-00',
  templateUrl: './cbn00.html',
  styleUrls: ['./cbn00.scss'],
})

export class Cbn00 implements OnInit {

  /*****************************************************************************
   * TCODE TEMPORARY VARIABLES
   * prefix:        Prefix of tcode
   * collapse:      UI for processing and datatable action
   * rights:        User system rights
   *****************************************************************************/

  prefix: string = 'cbn';
  collapse: boolean = true;
  rights: Array<any>;
  rights1: Array<any>;

  public systemImagePath: string = '../../../../assets/images/system/';

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
  }

}
