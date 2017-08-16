// Model
import { MjeService } from '../../../../core/services/mje.service';

// Internal
import { BcUtilsService } from '../../../../theme/services/bcUtils';

// External
import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-17',
  templateUrl: './mje17.html',
  styleUrls: ['./mje17.scss'],
})

export class Mje17 implements OnInit, OnChanges, OnDestroy {
  id: string;
  tcode: string = "mje17";

  canReturn: boolean;
  submitIcon: string = '';
  submitTitle: string = '';
  submitMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mjeService: MjeService,
    private utilsService: BcUtilsService,
  ) { }

  ngOnInit() {
    this.utilsService.trackHistory();
    this.canReturn = this.utilsService.canReturn();

    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
    });

    if (this.id) {
      this.patchMje();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.id);
    if (changes['id'] && this.id) {
      this.patchMje();
    }
  }

  patchMje() {
    this.mjeService.patchField(this.id, { option: 3 })
      .subscribe(
        data => {
            console.log(data);
            this.submitIcon = 'ion-checkmark-circled';
            this.submitTitle = 'a2z.success';
            this.submitMessage = 'a2z.success_post';
        },
        error => {
            this.submitIcon = 'ion-ios-close';
            this.submitTitle = 'a2z.error';
            this.submitMessage = 'a2z.error_post';
            console.log(error.body);
        },
    );
  }

  return() {
    this.utilsService.returnPrevious();
  }

  ngOnDestroy() {
    // activatedRoute is an exception that do not need to manually unscribe
  }

}
