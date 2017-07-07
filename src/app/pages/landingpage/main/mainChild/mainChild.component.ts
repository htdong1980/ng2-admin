import { Component } from '@angular/core';

@Component({
  selector: 'main-child',
  templateUrl: './mainChild.html',
  styleUrls: ['./mainChild.scss'],
})
export class MainChild {
  public mainChildContent: string = "I am mainChild";

}
