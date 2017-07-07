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
    - rights is Access Control List for user, type: Literal Array of Objects literal
    since Array extend function can not be used with Literal Array, two approach considered:
    + Approach 1: Use Literal Array of Objects
    + Approach 2: Conver to Array to easily use Array extension
  */

  @Input() prefix: string;
  @Input() rights: Array<any>; // TCode[];

  currentUrl: string;

  rightsLength: number;       // Approach 1
  rightsArray: any = null;    // Approach 2

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit () {
    this.currentUrl = this.router.url;

    // Approach 1
    this.rightsLength = this.objectLength(this.rights);
    // console.log(this.rightsLength);

    // Approach 2
    this.rightsArray = $.map(this.rights, function (value) { return value; });
    this.rightsArray.sort(this.compare);
    // console.log(this.rightsArray.length);
  }

  /* Approach 1: Literal Array of Objects */
  private objectLength(obj) {
    let result = 0;
    for ( let prop in obj ) {
      if (obj.hasOwnProperty(prop)) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
        result++;
      }
    }
    return result;
  }

  private search(obj, key, nameKey) {
    for (let i = 0; i < this.rightsLength; i++) {
         if (obj[i][key] == nameKey) {
             return true;
         }
     }
     return false;
  }

  /* Approach 2: Array extension */
  private searchArray(arr, key, nameKey) {
    return ( arr.some(function(obj) { return obj[key] == nameKey; }) );
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
  private onClick(tcode: string): void {
    const url: string = this.utilsService.urlLead(tcode);
    console.log(url);
    this.router.navigate([url,{returnUrl: this.currentUrl}]);
  }

}
