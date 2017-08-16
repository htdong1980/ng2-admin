// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import * as moment from 'moment/moment';

@Component({
  selector: 'mje-11',
  templateUrl: './mje11.html',
  styleUrls: ['./mje11.scss'],
})

export class Mje11 implements OnInit, OnDestroy {
  /*****************************************************************************
   * TCODE VARIABLES
   * tcode:         Tcode that navigate action and guide Form setup
   * entryJournal:  Model data
   *****************************************************************************/
  tcode: string = 'mje11';
  entryJournal: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilsService: BcUtilsService,
  ) {
  }

  ngOnInit() {
    this.utilsService.trackHistory();
    this.entryJournal = this.initData();
    // To get returnUrl from params
    // this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
    // console.log(this.returnUrl);
  }

  initData(): any {
    const currentUser: any = this.utilsService.getCurrentUser();
    const workingLge: string = this.utilsService.getLocalStorage('workingLge');
    const entryDate = new Date(Date.now());
    return {
      _id: '',
      ref: '',
      date: entryDate,
      ppr: currentUser.username,
      lge: workingLge,
      desc: '',
      docs: [],
      status: 'Active',
      post: 'Edit',
    };
  }

  ngOnDestroy() {
    // activatedRoute is an exception that do not need to manually unscribe
  }

}
