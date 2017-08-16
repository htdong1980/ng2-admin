// Internal
import { BcUtilsService } from '../../theme/services/bcUtils';

// External
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-blank',
  templateUrl: './blank.html',
  styleUrls: ['./blank.scss'],
})

export class BlankComponent implements OnInit {
  constructor(
    private utilsService: BcUtilsService,
  ) {
  }

  ngOnInit() {
    this.utilsService.trackHistory();
  }

}
