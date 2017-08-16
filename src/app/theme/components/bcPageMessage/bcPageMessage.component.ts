import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-page-message',
  templateUrl: 'bcPageMessage.html',
  styleUrls: ['./bcPageMessage.scss'],
})

export class BcPageMessage {
  @Input() icon: string;
  @Input() title: string;
  constructor() { }

}
