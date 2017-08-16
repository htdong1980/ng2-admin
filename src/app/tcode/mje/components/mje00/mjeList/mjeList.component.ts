// Model services
import { MjeService } from '../../../../../core/services/mje.service';

// Internal
import { BcPagerService } from '../../../../../theme/services';
// import { BcUtilsService } from '../../../../../theme/services';

// External
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'mje-list',
  templateUrl: './mjeList.html',
  styleUrls: ['./mjeList.scss'],
})

export class MjeList implements OnInit {

  /*****************************************************************************
   * INPUT
   * collapse:      UI of Processing and Datatable action
   * rights:        User system rights
   *****************************************************************************/
  @Input() collapse: boolean = true;
  @Input() rights: any;

  /*****************************************************************************
   * COMPONENT TEMPORARY VARIABLES
   * prefix:        Prefix of TCode
   * data:          List of all items to be tabled and paged
   *****************************************************************************/
  prefix: string = 'mje';
  mjes: any[] = [];  // array of all items to be paged

  /*****************************************************************************
   * INITIALIZE DATATABLE
   * - COLUMNS:       HEADERS OF DATATABLE
   *   + display:     The text to display
   *   + variable:    The name of the key that's apart of the data array
   *   + filter:      The type data type of the column (number, text, date, etc.)
   *
   * - SORTING:       INITIAL SORTING
   *****************************************************************************/
  columns: any[] = [
    {
      display: 'a2z.lge',
      variable: 'lge',
      filter: 'decimal : 1.0-2',
      align: 'center',
    },
    {
      display: 'a2z.ref',
      variable: 'ref',
      filter: 'text',
      align: 'left',
    },
    {
      display: 'a2z.desc',
      variable: 'desc',
      filter: 'text',
      align: 'left',
    },
    {
      display: 'a2z.date',
      variable: 'date',
      filter: 'dateTime',
      align: 'right',
    },
    {
      display: 'a2z.preparer',
      variable: 'ppr',
      filter: 'text',
      align: 'left',
    },
    {
      display: 'a2z.status',
      variable: 'docStatus',
      filter: 'text',
      align: 'center',
    },
  ];
  /*
    {
      display: 'shared.doc_id',
      variable: '_id',
      filter: 'text',
    },
   */

  sorting: any = {
    column: '_id',        // to match the variable of one of the columns
    descending: false,
  };

  constructor(
    private http: Http,
    private router: Router,
    private mjeService: MjeService,
    private pagerService: BcPagerService,
    // private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    // this.currentUser = this.utilsService.getCurrentUser();
    this.loadAll();
  }

  private loadAll() {
    this.mjeService.getAll().subscribe(mjes => {
      this.mjes = mjes;
    });
  }

}
