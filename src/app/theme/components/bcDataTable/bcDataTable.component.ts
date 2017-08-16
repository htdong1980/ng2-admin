// import { TCode } from '../../../core/models/tcode';

import { BcUtilsService } from '../../services/bcUtils';
import { BcPagerService } from '../../services/bcPager';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'data-table',
  templateUrl: 'bcDataTable.html',
  styleUrls: ['bcDataTable.scss'],
})
export class BcDataTable implements OnInit, OnChanges {

  // tcode-prefix that table navigate to
  @Input() prefix: string;
  @Input() rights: [string];

  // header and data of table
  @Input() columns: any[];  // header column
  @Input() data: any[];     // data

  // sortable
  @Input() sort: any;

  // page size
  @Input() pageSizeSelect: boolean = false;
  pageSize: number = 10;
  pager: any = {};      // pager object
  pagedItems: any[];    // paged items

  // filterable
  @Input() enableFilter: boolean = false;
  query: string = '';
  filterList: any[];

  // record
  recordCount: number = 0;

  // in case only display button by rights
  // @Input() rights: TCode[];
  @Input() collapse: boolean = true;

  constructor(
    private pagerService: BcPagerService,
    private router: Router,
    private utilsService: BcUtilsService,
  ) {
  }

  ngOnInit() {
    const column = {
      display: 'table.action',   // The text to display
      variable: '_action',        // The name of the key that's apart of the data array
      filter: 'button',           // The type data type of the column (number, text, date, etc.)
      align: 'center',
    };
    this.addColumn(column);
  }

  addColumn(column) {
    this.columns.push(column);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.setPage(1);
    }
  }

  getData() {
    if (this.query !== '') {
      return this.filterList;
    } else {
      return this.data;
    }
  }

  setPage(page: number) {
      this.recordCount = this.getData().length;

      if (page < 1 || ((page > this.pager.totalPages) && (this.pager.totalPages > 0))) { return; }
      // get pager object from service
      this.pager = this.pagerService.getPager(this.recordCount, page, this.pageSize);
      // get current page of items
      this.pagedItems = this.getData().slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  reSize() {
    this.setPage(1);
  }

  filter() {
    this.filterList = this.data.filter(function(el) {
      let result = '';
      for (const key in el) {
        result += el[key];
      }
      return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    }.bind(this));

    this.setPage(1);
  }

  selectedClass(columnName): string | boolean {
    return (columnName == this.sort.column) ? 'sort-' + this.sort.descending : false;
  }

  changeSorting(columnName): void {
    const sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }

  convertSorting(): string {
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  checkTCodeViaAction(action: string): boolean {
    const tcode: string = this.prefix + action;
    return this.utilsService.checkTCodeInEncodeArray(tcode, this.rights);
  }

  executeTCodeViaActionAndId(action: string, id: string): void {
    const url: string = this.utilsService.urlCombineId(this.prefix, action, id);
    console.log(url);
    this.router.navigate([url]);
  }
  
}
