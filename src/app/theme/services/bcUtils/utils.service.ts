import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BcUtilsService {

  /* TO CREATE AUTHORIZATION HEADER WITH JWT TOKEN*/
  jwt() {
      // get authorization header with jwt token from localStorage
      const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }

  /* To centrally transform the tcode to complete URL for navigation */
  private url: string = '/pages/tcode/';

  /* TRANSFORM A TCODE TO ACTIONABLE URL
   * extractPrefix(mjeXX)-> mje
   * extractAction(mjeXX)-> XX
   * urlLead(mjeXX)      -> /pages/tcode/mje/mjeXX
   * urlForm(mjeXX, id)  -> /pages/tcode/mje/mjeXX/123
   * urlHome(mjeXX)      -> /pages/tcode/mje
   */

  // extractPrefix: Extract prefix from tcode
  extractPrefix(tcode: string): string {
    return tcode.substring(0, (tcode.length - 2)).toLowerCase();
  }

  // extractAction: Extract action from tcode
  extractAction(tcode: string): string {
    return tcode.substring(tcode.length - 2).toLowerCase();
  }

  // urlLead: URL redirect to Lead
  urlLead(tcode: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    const prefix: string = this.extractPrefix(tcode) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase();
  }

  // urlForm: URL redirect to Form
  urlForm(tcode: string, value: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    const prefix: string = this.extractPrefix(tcode) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase() + '/' + value;
  }

  // urlHome: URL redirect to Home
  urlHome(tcode: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2));
    return this.url + this.extractPrefix(tcode).toLowerCase();
  }

}
