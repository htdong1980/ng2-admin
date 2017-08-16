import { Account } from '../interface/account.interface';
import { AppConfig } from '../../app.config';
import { BcUtilsService } from '../../theme/services/bcUtils';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AccountService {

    prefix: string = '/acc/';

    constructor(
      private http: Http,
      private config: AppConfig,
      private utilsService: BcUtilsService,
    ) { }

    getList() {
        return this.http.get(
            this.config.apiUrl + this.prefix + 'list',
            this.utilsService.jwt())
        .map((response: Response) => response.json());
    }

    getAll() {
        return this.http.get(
            this.config.apiUrl + this.prefix,
            this.utilsService.jwt())
        .map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(
            this.config.apiUrl + this.prefix + _id,
            this.utilsService.jwt())
        .map((response: Response) => response.json());
    }

    create(account: Account) {
        return this.http.post(
            this.config.apiUrl + this.prefix + 'add',
            account,
            this.utilsService.jwt());
    }

    update(account: Account) {
        return this.http.put(
            this.config.apiUrl + this.prefix + account._id,
            account,
            this.utilsService.jwt());
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.utilsService.jwt());
    }
    
}
