import { Account } from '../interface/account.interface';
import { AppConfig } from '../../app.config';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AccountService {

    prefix: string = '/accounts/';

    constructor(
      private http: Http,
      private config: AppConfig,
    ) { }

    getList() {
        return this.http.get(
            this.config.apiUrl + this.prefix + 'list',
            this.jwt())
        .map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get(
            this.config.apiUrl + this.prefix,
            this.jwt())
        .map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(
            this.config.apiUrl + this.prefix + _id,
            this.jwt())
        .map((response: Response) => response.json());
    }

    create(account: Account) {
        return this.http.post(
            this.config.apiUrl + this.prefix + 'add',
            account,
            this.jwt());
    }

    update(account: Account) {
        return this.http.put(
            this.config.apiUrl + this.prefix + account._id,
            account,
            this.jwt());
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.jwt());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
