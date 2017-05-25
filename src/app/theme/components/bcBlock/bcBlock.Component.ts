import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-block',
  templateUrl: './bcBlock.html',
  styleUrls: ['./bcBlock.scss'],
})
export class BcBlock {
  @Input() bcBorderClass: String; // border-right
  @Input() textColor: String;
  @Input() arrow: String;         // up, right, left, down
  @Input() percent: String;
  @Input() header: String;
  @Input() text: String;

}
