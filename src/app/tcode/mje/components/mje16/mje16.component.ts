// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-16',
  templateUrl: './mje16.html',
  styleUrls: ['./mje16.scss'],
})

export class Mje16 implements OnInit {
  id: string;
  returnUrl: string = '';
  tcode: string = "mje16";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    this.utilsService.trackHistory();

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.returnUrl = params['returnUrl'];
      });
  }
}
