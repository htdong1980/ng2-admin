import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-04',
  templateUrl: './mje04.html',
  styleUrls: ['./mje04.scss'],
})

export class Mje04 implements OnInit {
  id: string;
  returnUrl: string = '';
  tcode: string = "mje04";

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
