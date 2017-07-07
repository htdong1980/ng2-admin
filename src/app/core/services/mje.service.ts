import { AppConfig } from '../../app.config';
import { Mje } from '../models/mje';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class MjeService {

    prefix: string = '/mjes/';

    constructor(
        private http: Http,
        private config: AppConfig,
    ) { }

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

    create(mje: Mje) {
        return this.http.post(
            this.config.apiUrl + this.prefix,
            mje,
            this.jwt());
    }

    update(mje: Mje) {
        return this.http.put(
            this.config.apiUrl + this.prefix + mje._id,
            mje,
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
