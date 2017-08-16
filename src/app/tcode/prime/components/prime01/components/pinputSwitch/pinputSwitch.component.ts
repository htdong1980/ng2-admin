// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pinputSwitch',
  templateUrl: './pinputSwitch.html',
  styleUrls: ['./pinputSwitch.scss'],
})

export class PInputSwitch implements OnInit {

  checked1: boolean = false;

  checked2: boolean = true;

  constructor(
  ) { }

  ngOnInit() {
  }

}
