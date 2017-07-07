import { AppConfig } from '../../app.config';
import { News } from '../models/news';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class NewsService {

    prefix: string = '/news/';

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

    create(news: News) {
        return this.http.post(
            this.config.apiUrl + this.prefix,
            news,
            this.jwt());
    }

    update(news: News) {
        return this.http.put(
            this.config.apiUrl + this.prefix + news._id,
            news,
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
