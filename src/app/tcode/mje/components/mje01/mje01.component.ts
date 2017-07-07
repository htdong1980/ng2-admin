import { AuthenticationService } from '../../../../core/services/authentication.service';
// import { EntryJournal } from '../../../../core/interface/entryJournal.interface';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-01',
  templateUrl: './mje01.html',
  styleUrls: ['./mje01.scss'],
})

export class Mje01 implements OnInit, OnDestroy {
  public returnUrl: string = '';
  public tcode: string = 'mje01';
  public entryJournal: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {

    this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
    console.log(this.returnUrl);

    this.entryJournal = {
      _id: '012345',
      entryDate: new Date('2016-09-15'),
      desc: 'The first entry',
      lge: '0475',
      user: 'htdong',
      items: [
        { docDate: new Date('2016-09-15'),
          desc: 'Spending for marketing event of Lovenox',
          acc: '6411',
          crc: 'VND',
          amt1: 5500,
          fx: 1,
          amt2: 5500,
          refs: [
            {
              objType: 'itm',
              objId: 'lovenox',
              objTitle: 'Lovenox',
            },
            {
              objType: 'org',
              objId: 'ETC',
              objTitle: 'Ethical',
            },
            {
              objType: 'cel',
              objId: 'MKT',
              objTitle: 'Marketing Cost',
            },
            {
              objType: 'cct',
              objId: 'MKT',
              objTitle: 'Marketing Cost',
            },
          ],
        },
        { docDate: new Date('2016-09-15'),
          desc: 'Payable of marketing event of Lovenox',
          acc: '331',
          crc: 'VND',
          amt1: 3000,
          fx: 1,
          amt2: 3000,
          refs: [
            {
              objType: 'vdr',
              objId: 'ABC',
              objTitle: 'Vendor ABC',
            },
          ],
        },
        { docDate: new Date('2016-09-15'),
          desc: 'Cash payment of marketing event of Lovenox',
          acc: '111',
          crc: 'VND',
          amt1: 2000,
          fx: 1,
          amt2: 2000,
          refs: [
            {
              objType: 'bnk',
              objId: 'CashHO',
              objTitle: 'Petty cash at Head Office',
            },
          ],
        },
      ],
    };
  }

  ngOnDestroy() {
  }

}
