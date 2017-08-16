// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mcat-42',
  templateUrl: './mcat42.html',
  styleUrls: ['./mcat42.scss'],
})

export class Mcat42 implements OnInit {

  /*****************************************************************************
   * TCODE TEMPORARY VARIABLES
   * prefix:        Prefix of tcode
   * collapse:      UI for processing and datatable action
   * rights:        User system rights
   *****************************************************************************/

  prefix: string = 'mcat';
  rights: [string];

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    // Track user's visit
    this.utilsService.trackHistory();

    this.rights = this.utilsService.getMana();
  }

  private executeTCode(prefix: string, action: string): void {
    const url: string = this.utilsService.urlCombineTCode(prefix, action);
    this.router.navigate([url]);
  }

}
