import { LegalEntity } from '../interface/legalEntity.interface';
import { AppConfig } from '../../app.config';
import { BcUtilsService } from '../../theme/services/bcUtils';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class LegalEntityService {

    prefix: string = '/lge/';

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

    create(lge: LegalEntity) {
        return this.http.post(
            this.config.apiUrl + this.prefix + 'add',
            lge,
            this.utilsService.jwt());
    }

    update(lge: LegalEntity) {
        return this.http.put(
            this.config.apiUrl + this.prefix + lge._id,
            lge,
            this.utilsService.jwt());
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.utilsService.jwt());
    }

}
