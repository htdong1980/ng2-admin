import { Component } from '@angular/core';

@Component({
  selector: 'blank-child',
  templateUrl: './blankChild.html',
  styleUrls: ['./blankChild.scss']
})
export class BlankChild {
  public blankChildContent: string = "I am blankChild";
  ngOnInit() {
  }
}
