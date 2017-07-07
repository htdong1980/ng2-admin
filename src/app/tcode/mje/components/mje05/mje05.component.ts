import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-05',
  templateUrl: './mje05.html',
  styleUrls: ['./mje05.scss'],
})

export class Mje05 implements OnInit {
  id: string;
  returnUrl: string = '';
  tcode: string = "mje05";

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
