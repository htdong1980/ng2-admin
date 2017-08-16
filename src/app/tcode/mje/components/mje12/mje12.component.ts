// Model services
import { MjeService } from '../../../../core/services/mje.service';

// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-12',
  templateUrl: './mje12.html',
  styleUrls: ['./mje12.scss'],
})

export class Mje12 implements OnInit, OnDestroy {
  /*****************************************************************************
   * TCODE VARIABLES
   * tcode:           Tcode that navigate action and guide Form setup
   *
   * For LEAD
   * - lgeList:       List of Legal Entities
   * - lge:           Working Legal Entity
   * - id:            Document ID
   *
   * For FORM
   * - entryJournal:  Model data
   *****************************************************************************/
  tcode: string = 'mje12';

  lgeList: Array<any>;
  lge: string;
  id: string;

  entryJournal: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilsService: BcUtilsService,
    private mjeService: MjeService,
  ) { }

  ngOnInit() {
    this.utilsService.trackHistory();

    // For LEAD
    const currentUser: any = this.utilsService.getCurrentUser();
    this.lgeList = currentUser.lge;
    this.lge = this.utilsService.getWorkingLge();

    // Subscribe to router event to get Id
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
      });

    if (this.id != undefined && this.id) {
      this.initData(this.id);
    }
  }

  initData(id: string): void {
    this.mjeService.getById(id).subscribe(mje => {
      this.entryJournal = mje;
      // console.log(data);
    });
  }

  ngOnDestroy() {
    // activatedRoute is an exception that do not need to manually unscribe
  }

}
