import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-box',
  templateUrl: './bcBox.html',
  styleUrls: ['./bcBox.scss'],
})
export class BcBox {

  @Input() title: String;
  @Input() bcBoxClass: String; // box-danger
  @Input() bcSolidClass: String; // box-solid
  @Input() bcBorderClass: String; // with-border

}
