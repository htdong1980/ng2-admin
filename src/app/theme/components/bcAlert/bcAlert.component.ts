import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-alert',
  templateUrl: './bcAlert.html',
  styleUrls: ['./bcAlert.scss'],
})
export class BcAlert {

  @Input() bcAlertType: String; // success, danger, warning, info
  @Input() icon: String;
  @Input() header: String;

}
