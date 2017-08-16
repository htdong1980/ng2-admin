import { AppConfig } from '../../../app.config';

import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

// declare const Buffer;

@Injectable()
export class BcUtilsService {

  constructor(
    private router: Router,
    private http: Http,
    private config: AppConfig,
  ) { }

  /****************************************************************************
   * Utilities Service provide variety of tools that are widely used in app
   * - Security
   * - TCode Processing and Transforming
   * 01. Array
   ****************************************************************************/

  /****************************************************************************
   * TO CREATE AUTHORIZATION HEADER WITH JWT TOKEN
   ****************************************************************************/
  jwt() {
      // get authorization header with jwt token from localStorage
      const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
      const awt: string = JSON.stringify(currentUser.awt);
      if (currentUser && currentUser.token) {
          const headers = new Headers({
            'authorization': 'Bearer ' + currentUser.token,
            'awt': awt, // Array Web Token
          });
          return new RequestOptions({ headers: headers });
      }
  }

  logOut() {
    // const temp = this.http.post(this.config.apiUrl + '/users/logout', {});
    // console.log(temp);

    // remove user from local storage to log user out
    localStorage.removeItem('history');
    localStorage.removeItem('mana');
    localStorage.removeItem('currentUser');
  }
  /*****************************************************************************
   * TO PROCESS APPLICATION TCODE OR TRANSFORM A TCODE TO BE ACTIONABLE URL
   * extractPrefix(mjeXX)-> mje
   * extractAction(mjeXX)-> XX
   * urlLead(mjeXX)      -> /pages/tcode/mje/mjeXX
   * urlForm(mjeXX, id)  -> /pages/tcode/mje/mjeXX/123
   * urlHome(mjeXX)      -> /pages/tcode/mje
   *****************************************************************************/
  private url: string = '/pages/tcode/';        // Home of application Tcode

  // Extract prefix from tcode
  extractPrefix(tcode: string): string {
    return tcode.substring(0, (tcode.length - 2)).toLowerCase();
  }

  // Extract action from tcode
  extractAction(tcode: string): string {
    return tcode.substring(tcode.length - 2).toLowerCase();
  }

  // editable
  formEditable(tcode: string): boolean {
    const action = this.extractAction(tcode);
    return ((action == '11') || (action == '13'));
  }

  // URL redirect to LEAD
  urlLead(tcode: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    const prefix: string = this.extractPrefix(tcode) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase();
  }

  // URL redirect to Form
  urlForm(tcode: string, value: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2)) + '/';
    const prefix: string = this.extractPrefix(tcode) + '/';
    return this.url + prefix.toLowerCase() + tcode.toLowerCase() + '/' + value;
  }

  // URL from prefix and action
  urlCombine(prefix: string, action: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action;
  }

  // URL from prefix and action
  urlCombineTCode(prefix: string, action: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action;
  }

  // URL from prefix, action and Id
  urlCombineId(prefix: string, action: string, id: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action + '/' + id;
  }

  urlCombineTCodeAndId(prefix: string, action: string, id: string): string {
    return this.url + prefix.toLowerCase() + '/' + prefix.toLowerCase() + action + '/' + id;
  }

  // URL redirect to Mainpage of tcode
  urlHome(tcode: string): string {
    // const prefix: string = tcode.substring(0, (tcode.length - 2));
    return this.url + this.extractPrefix(tcode).toLowerCase();
  }

  /*****************************************************************************
   * TO UTILIZE LOCAL STORAGE
   * setLocalStorage
   * getLocalStorage
   * getCurrentUser
   * getWorkingLge
   *****************************************************************************/
  /* TO MANAGE LOCAL STORAGE */
  setLocalStorage(item: string, value: any) {
    localStorage.setItem(item, value);
  }

  getLocalStorage(item: string): any {
    return localStorage.getItem(item);
  }

  removeLocalStorage(item: string) {
    localStorage.removeItem(item);
  }

  setCurrentUser(user: string) {
    this.setLocalStorage('currentUser', user);
  }

  getCurrentUser() {
    return JSON.parse(this.getLocalStorage('currentUser'));
  }

  setMana(mana: string) {
    this.setLocalStorage('mana', mana);
  }

  getMana() {
    return JSON.parse(this.getLocalStorage('mana'));
  }

  setWorkingLge(lge: string) {
    this.setLocalStorage('workingLge', lge);
  }

  getWorkingLge(): string {
    return this.getLocalStorage('workingLge');
  }

  setToken(token: string) {
    this.setLocalStorage('token', token);
  }

  getToken(): string {
    return this.getLocalStorage('token');
  }

  setCollapsePref(pref: boolean) {
    this.setLocalStorage('collapsePref', pref);
  }

  getCollapsePref(): boolean {
    if (this.getLocalStorage('collapsePref') != undefined) {
      return this.getLocalStorage('collapsePref');
    } else {
      this.setCollapsePref(true);
      return false;
    }

  }

  /*****************************************************************************
   * SIMPLE HASH
   * npm i -g typescript@next
   * npm i --save @types/node or
   * npm install --save @types/node
   * for other libraries, install @types/library_name
   *****************************************************************************/

   encode(str: string): string {
     /*
     const sh = new Buffer(str);
     return sh.toString('base64');
     */
     return btoa(str);
   }

   decode(str: string): string {
     /*
     const sh = new Buffer(str, 'base64');
     return sh.toString();
     */
     return atob(str);
   }

   encode_array(arr: Array<string>): Array<string> {
     return arr.map((elem, index) => {
       return this.encode(elem);
     });
   }

   decode_array(arr: Array<string>): Array<string> {
     return arr.map((elem, index) => {
       return this.decode(elem);
     });
  }

  checkTCodeInEncodeArray(tcode: string, encodedArray: [string]): boolean {
    return encodedArray.includes(this.encode(tcode));
  }
  /*****************************************************************************
   * HISTORY
   * trackHistory:        To track the last (20) user visits to support backward
   * canReturn:           To confirm if return is possble
   * returnPrevious:      To perform backward
   *****************************************************************************/
  trackHistory(): void {
    if (localStorage.getItem('history') === null) {
      this.setLocalStorage('history', '[]');
    }

    const history: any[] = JSON.parse(this.getLocalStorage('history'));

    while (history.length >= 10 ) {
      history.shift();
    }

    const currentUrl = this.router.url; /// this will give you current url
    if (currentUrl != history[history.length - 1]) {
      history.push(currentUrl);
    }

    this.setLocalStorage('history', JSON.stringify(history));
    // console.log(history);
  }

  canReturn(): boolean {
    const history: any[] = JSON.parse(this.getLocalStorage('history'));
    return (history.length > 1);
  }

  returnPrevious(): void {
    let history: any[] = JSON.parse(this.getLocalStorage('history'));
    if (history.length > 1) {
      history.pop();
      // console.log(history);
      const returnUrl: string = history[(history.length - 1)];
      history.pop();
      this.setLocalStorage('history', JSON.stringify(history));
      // console.log(returnUrl);
      this.router.navigate([returnUrl]);
    }
  }
  /*****************************************************************************
   * OBJECT
   * propInObject:        Check if a property exists in an Object
   *****************************************************************************/
   propInObject(obj, prop): boolean {
     return Object.prototype.hasOwnProperty.call(obj, prop);
    // return (prop in obj);
   }

   hasProp (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  /*****************************************************************************
   * ARRAY
   * getLengthArrayOfObject
   *****************************************************************************/

   checkElementInArray(elem, arr): boolean {
     return (arr.indexOf(elem) > -1);
   }

   // To return number of objects exists in an array
   getLengthArrayOfObject(obj): number {
     let result = 0;
     for ( const prop in obj ) {
       if (obj.hasOwnProperty(prop)) {
         result++;
       }
     }
     return result;
   }

}
