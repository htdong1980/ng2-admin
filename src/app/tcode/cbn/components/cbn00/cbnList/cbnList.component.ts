// Internal
import { BcPagerService } from '../../../../../theme/services';
// import { BcUtilsService } from '../../../../../theme/services';

// Model services
import { CbnService } from '../../../../../core/services/cbn.service';

// External
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'cbn-list',
  templateUrl: './cbnList.html',
  styleUrls: ['./cbnList.scss'],
})

export class CbnList implements OnInit {

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
  prefix: string = 'cbn';
  cbns: any[] = [];  // array of all items to be paged

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
      display: 'a2z.cbn',
      variable: 'desc',
      filter: 'text',
      align: 'left',
    },
    {
      display: 'a2z.path',
      variable: '_id',
      filter: 'text',
      align: 'left',
    },
    {
      display: 'a2z.status',
      variable: 'status',
      filter: 'text',
      align: 'center',
    },
  ];

  sorting: any = {
    column: '_id',        // to match the variable of one of the columns
    descending: false,
  };

  constructor(
    private http: Http,
    private router: Router,
    private cbnService: CbnService,
    private pagerService: BcPagerService,
    // private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    // this.currentUser = this.utilsService.getCurrentUser();
    this.loadAll();
  }

  private loadAll() {
    this.cbnService.getAll().subscribe(cbns => {
      this.cbns = cbns;
    });
  }

}
