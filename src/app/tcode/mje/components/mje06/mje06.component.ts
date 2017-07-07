import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-06',
  templateUrl: './mje06.html',
  styleUrls: ['./mje06.scss'],
})

export class Mje06 implements OnInit {
  id: string;
  returnUrl: string = '';
  tcode: string = "mje06";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.returnUrl = params['returnUrl'];
      });
  }
}
