import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-21',
  templateUrl: './mje21.html',
  styleUrls: ['./mje21.scss'],
})

export class Mje21 implements OnInit, OnDestroy {
  returnUrl: string = '';
  tcode: string = 'mje21';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
    console.log(this.returnUrl);
  }

  return() {
    this.router.navigate([this.returnUrl]);
  }

  ngOnDestroy() {
  }

}
