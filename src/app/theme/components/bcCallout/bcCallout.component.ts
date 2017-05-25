import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-callout',
  templateUrl: './bcCallout.html',
  styleUrls: ['./bcCallout.scss'],
})
export class BcCallout {

  @Input() bcCalloutType: String; // success, danger, warning, info
  @Input() header: String;

}
