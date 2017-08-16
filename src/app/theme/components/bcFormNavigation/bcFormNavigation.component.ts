import { BcUtilsService } from '../../services/bcUtils';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-form-navigation',
  templateUrl: './bcFormNavigation.html',
  styleUrls: ['./bcFormNavigation.scss'],
})
export class BcFormNavigation implements OnInit {

  @Input() formAction: any[];
  @Input() tcode: string;
  @Input() value: string;
  @Input() collapse: boolean;

  prefix: string = '';

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit () {
    this.prefix = this.utilsService.extractPrefix(this.tcode);
  }

  executeTCode(tcode: string): void {
    let url: string = '';
    if (this.utilsService.extractAction(tcode) == '11') {
      url = this.utilsService.urlLead(tcode);
    } else {
      url = this.utilsService.urlForm(tcode, this.value);
    }
    this.router.navigate([url]);
  }
}
