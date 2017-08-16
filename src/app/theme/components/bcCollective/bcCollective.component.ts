import { BcUtilsService } from '../../services/bcUtils';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-collective',
  templateUrl: './bcCollective.html',
  styleUrls: ['./bcCollective.scss'],
})
export class BcCollective implements OnInit {
  // Please refer to BcIndividual to see different between Literal Array of Objects literal

  @Input() prefix: string;      // tcode-prefix
  @Input() rights: [string];  // TCode[];
  @Input() collapse: boolean;

  currentUrl: string;
  rightsArray: any = null;

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit () {}

  checkTCodeViaAction(action: string): boolean {
    const tcode: string = this.prefix + action;
    return this.utilsService.checkTCodeInEncodeArray(tcode, this.rights);
  }

  executeTCodeViaAction(action: string): void {
    const url: string = this.utilsService.urlCombineTCode(this.prefix, action);
    console.log(url);
    this.router.navigate([url]);
  }

}
