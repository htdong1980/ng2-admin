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

  constructor() {
  }

}
