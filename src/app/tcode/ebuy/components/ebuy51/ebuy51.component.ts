// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ebuy-51',
  templateUrl: './ebuy51.html',
  styleUrls: ['./ebuy51.scss'],
})

export class Ebuy51 implements OnInit {

  prefix: string = 'ebuy';
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
