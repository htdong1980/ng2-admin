import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-info-box',
  templateUrl: './bcInfoBox.html',
  styleUrls: ['./bcInfoBox.scss'],
})
export class BcInfoBox {
  @Input() infoColor: String;
  @Input() icon: String;
  @Input() title: String;
  @Input() figure: String;
  @Input() progress: String;
  @Input() info: String;
}
