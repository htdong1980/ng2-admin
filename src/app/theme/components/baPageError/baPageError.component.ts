import { BcUtilsService } from '../../services/bcUtils';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-page-error',
  templateUrl: 'baPageError.html',
  styleUrls: ['./baPageError.scss'],
})

export class BaPageError {
  @Input() error: string;
  @Input() message: string;
  @Input() link: string;
  @Input() text: string;

  constructor(
    private utilsService: BcUtilsService,
  ) {
  }

  /* To return the home of tcode */
  private return(): void {
    this.utilsService.returnPrevious();
  }
}
