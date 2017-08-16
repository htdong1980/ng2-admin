// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'err-03',
  templateUrl: './err03.html',
  styleUrls: ['./err03.scss'],
})

export class Err03 implements OnInit {

  prefix: string = 'err';
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
