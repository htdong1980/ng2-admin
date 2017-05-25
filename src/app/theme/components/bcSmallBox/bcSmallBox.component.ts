import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-small-box',
  templateUrl: './bcSmallBox.html',
  styleUrls: ['./bcSmallBox.scss'],
})
export class BcSmallBox {
  @Input() bgColor: String;
  @Input() figure: String;
  @Input() title: String;
  @Input() ion: String;
  @Input() link: String;
}
