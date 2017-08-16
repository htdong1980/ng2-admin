// Internal
import { BcUtilsService } from '../../theme/services/bcUtils';
import { AppConfig } from '../../app.config';

// External
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class CbnService {

    prefix: string = '/cbn/';

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

    create(cbn: any) {
        return this.http.post(
            this.config.apiUrl + this.prefix,
            cbn,
            this.utilsService.jwt());
    }

    update(cbn: any) {
        return this.http.put(
            this.config.apiUrl + this.prefix + cbn._id,
            cbn,
            this.utilsService.jwt());
    }

    patchField(_id: any, cbnField: any) {
        // console.log(_id, cbnField);
        return this.http.patch(
            this.config.apiUrl + this.prefix + _id,
            cbnField,
            this.utilsService.jwt());
    }

    delete(_id: string) {
        return this.http.delete(
            this.config.apiUrl + this.prefix + _id,
            this.utilsService.jwt());
    }

}
