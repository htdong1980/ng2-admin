import { BcUtilsService } from '../../services/bcUtils';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bc-lead',
  templateUrl: './bcLead.html',
  styleUrls: ['./bcLead.scss'],
})
export class BcLead implements OnInit {
  @Input() returnUrl: string;
  @Input() tcode: string;

  lgeList: Array<any>;
  lge: string = '';
  id: string = '';
  action: string = '';
  public myForm: FormGroup;             // form model

  constructor(
    private router: Router,
    private utilsService: BcUtilsService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit () {
    this.action = this.utilsService.extractAction(this.tcode);

    const currentUser: any = this.getCurrentUser();
    this.lgeList = currentUser.lges;
    this.lge = this.getWorkingLge();

    this.myForm = this._fb.group({
      lge: [this.lge, [Validators.required]],
      id: [this.id, [Validators.required]],
    });
  }

  private getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  private getWorkingLge(): string {
    return localStorage.getItem('workingLge');
  }
  /* To get value and navigate the link */
  private onClick(): void {
    localStorage.setItem('workingLge', this.myForm.controls['lge'].value);
    //const url: string = this.utilsService.urlForm(this.tcode, this.id);
    //this.router.navigate([url]);
  }

  /* To return the home of tcode */
  private return(): void {
    this.router.navigate([this.returnUrl]);
  }

}
