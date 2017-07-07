import { User } from '../../../../../core/models/user';
import { BcUtilsService } from '../../../../../theme/services';
import { Mje } from '../../../../../core/models/mje';
import { MjeService } from '../../../../../core/services/mje.service';
import { BcPagerService } from '../../../../../theme/services';

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'mje-list',
  templateUrl: './mjeList.html',
  styleUrls: ['./mjeList.scss'],
})

export class MjeList implements OnInit {

  currentUser: User;

  prefix: string = 'mje';
  mjes: Mje[] = [];  // array of all items to be paged

  /* COLUMNS (HEADERS)
   * display:   The text to display
   * variable:  The name of the key that's apart of the data array
   * filter:    The type data type of the column (number, text, date, etc.)
   */
  columns: any[] = [
    {
      display: 'shared.doc_id',
      variable: '_id',
      filter: 'text',
    },
    {
      display: 'shared.lge',
      variable: 'lge',
      filter: 'decimal : 1.0-2',
    },
    {
      display: 'shared.doc_date',
      variable: 'docDate',
      filter: 'dateTime',
    },
    {
      display: 'shared.desc',
      variable: 'desc',
      filter: 'text',
    },
    {
      display: 'shared.entry_date',
      variable: 'entryDate',
      filter: 'dateTime',
    },
    {
      display: 'shared.create_by',
      variable: 'user',
      filter: 'text',
    },
  ];

  sorting: any = {
    column: '_id', // to match the variable of one of the columns
    descending: false,
  };

  constructor(
    private http: Http,
    private router: Router,
    private mjeService: MjeService,
    private pagerService: BcPagerService,
    private utilsService: BcUtilsService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAll();
  }

  private loadAll() {
    this.mjeService.getAll().subscribe(mjes => {
      this.mjes = mjes;
    });
  }

}
