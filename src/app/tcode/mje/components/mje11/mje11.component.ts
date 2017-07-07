import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mje-11',
  templateUrl: './mje11.html',
  styleUrls: ['./mje11.scss'],
})

export class Mje11 implements OnInit, OnDestroy {
  returnUrl: string = '';
  tcode: string = 'mje11';
  
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
