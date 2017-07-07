import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-03',
  templateUrl: './mje03.html',
  styleUrls: ['./mje03.scss'],
})

export class Mje03 implements OnInit {
  id: string;
  returnUrl: string = '';
  tcode: string = "mje03";

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

  ngOnDestroy() {
    // activatedRoute is an exception that do not need to manually unscribe
  }

}
