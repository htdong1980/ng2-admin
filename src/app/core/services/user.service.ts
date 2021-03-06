import { User } from '../models/user';
import { AppConfig } from '../../app.config';
import { BcUtilsService } from '../../theme/services/bcUtils';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

    prefix: string = '/user/';

    constructor(
      private http: Http,
      private config: AppConfig,
      private utilsService: BcUtilsService,
    ) { }

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

    create(user: User) {
        return this.http.post(
            this.config.apiUrl + this.prefix + 'register',
            user);
    }

    update(user: User) {
        return this.http.put(
            this.config.apiUrl + this.prefix + user._id,
            user,
            this.utilsService.jwt());
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.utilsService.jwt());
    }

}
