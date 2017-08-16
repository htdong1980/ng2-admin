// import { TCode } from '../../../core';
import { BcUtilsService } from '../../services/bcUtils';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-individual',
  templateUrl: './bcIndividual.html',
  styleUrls: ['./bcIndividual.scss'],
})
export class BcIndividual implements OnInit {
  /* Template file
    - prefix is the tcode-prefix
    - rights is List of encoded TCode from getMana
  */

  @Input() prefix: string;
  @Input() rights: [string]; // TCode[];
  @Input() collapse: boolean;

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit () {
  }

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
