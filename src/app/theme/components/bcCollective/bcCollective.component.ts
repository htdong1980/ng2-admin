// import { TCode } from '../../../core';
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
  @Input() rights: Array<any>;  // TCode[];

  currentUrl: string;
  rightsArray: any = null;

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit () {
    this.currentUrl = this.router.url;

    this.rightsArray = $.map(this.rights, function (value) { return value; });
    this.rightsArray.sort(this.compare);
    // console.log(this.rightsArray);
  }

  private compare(a, b) {
    if ( a.tcode < b.tcode ) {
      return -1;
    }
    if ( a.tcode > b.tcode ) {
      return 1;
    }
    return 0;
  }

  /* To get tcode and navigate the link */
  private onClick(tcode) {
    const url: string = this.utilsService.urlLead(tcode);
    this.router.navigate([url, { returnUrl: this.currentUrl }]);
  }

}
