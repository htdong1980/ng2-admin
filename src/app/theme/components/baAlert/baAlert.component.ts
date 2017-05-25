import { Component, OnInit } from '@angular/core';

import { BaAlertService } from '../../services';

@Component({
    moduleId: module.id,
    selector: 'nga-ba-alert',
    templateUrl: 'baAlert.component.html'
})

export class BaAlert implements OnInit {
    message: any;

    constructor(private alertService: BaAlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
