import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adminLTE-child',
  templateUrl: './adminLTEChild.html',
  styleUrls: ['./adminLTEChild.scss'],
})
export class AdminLTEChild implements OnInit {
  public firstCardContent: string;
  public secondCardContent: string;
  public thirdCardContent: string;
  public fourthCardContent: string;

  ngOnInit() {
    this.firstCardContent = 'First Card';
    this.secondCardContent = 'Second Card';
    this.thirdCardContent = 'Third Card';
    this.fourthCardContent = 'Fourth Card';
  }
}
