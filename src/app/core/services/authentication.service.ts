import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http, private config: AppConfig) { }

  login(username: string, password: string) {
    return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('workingLge', user.defaultLge);
          /*
          const userRights: Array<any> = [
            { 'id': 1, 'tcode': 'mje01' },
            { 'id': 1, 'tcode': 'mje03' },
            { 'id': 2, 'tcode': 'mje02' },
            { 'id': 2, 'tcode': 'mje04' },
            { 'id': 2, 'tcode': 'mje06' },
            { 'id': 2, 'tcode': 'mje05' },
            { 'id': 3, 'tcode': 'mje16' },
            { 'id': 4, 'tcode': 'mje12' },
            { 'id': 4, 'tcode': 'mje14' },
            { 'id': 4, 'tcode': 'mje15' },
            { 'id': 4, 'tcode': 'mje13' },
            { 'id': 4, 'tcode': 'mje11' },
          ];
          localStorage.setItem('userRights', JSON.stringify(userRights));
          */
        }
    });
  }

  getCurrentUser(): Array<any> {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getWorkingLge(): string {
    return localStorage.getItem('workingLge');
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('workingLge');
    localStorage.removeItem('currentUser');
  }
}
