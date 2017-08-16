// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pspinner',
  templateUrl: './pspinner.html',
  styleUrls: ['./pspinner.scss'],
})

export class PSpinner implements OnInit {
  val1: number;

  val2: number;

  val3: number;

  val4: number = 100;

  constructor(
  ) { }

  ngOnInit() {
  }

}
