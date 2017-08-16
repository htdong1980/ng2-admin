// Internal
import { AppConfig } from '../../app.config';
import { BcUtilsService } from '../../theme/services/bcUtils';

// External
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class MjeService {

    prefix: string = '/mje/';

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

    create(mje: any) {
        return this.http.post(
            this.config.apiUrl + this.prefix,
            mje,
            this.utilsService.jwt());
    }

    update(mje: any) {
        return this.http.put(
            this.config.apiUrl + this.prefix + mje._id,
            mje,
            this.utilsService.jwt());
    }

    patchField(_id: any, mjeField: any) {
        // console.log(_id, mjeField);
        return this.http.patch(
            this.config.apiUrl + this.prefix + _id,
            mjeField,
            this.utilsService.jwt());
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.utilsService.jwt());
    }

}
