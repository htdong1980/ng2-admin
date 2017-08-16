import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-simple-card',
  templateUrl: './bcSimpleCard.html',
  styleUrls: ['./bcSimpleCard.scss'],
})
export class BcSimpleCard {
  @Input() title: String;
}
