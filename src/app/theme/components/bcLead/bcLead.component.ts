// Internal
import { BcUtilsService } from '../../services/bcUtils';

// External
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bc-lead',
  templateUrl: './bcLead.html',
  styleUrls: ['./bcLead.scss'],
})
export class BcLead implements OnInit {
  @Input() tcode: string;

  canReturn: boolean = false;
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
    this.canReturn = this.utilsService.canReturn();
    
    this.action = this.utilsService.extractAction(this.tcode);

    const currentUser: any = this.utilsService.getCurrentUser();
    this.lgeList = currentUser.lges;
    this.lge = this.utilsService.getWorkingLge();

    this.myForm = this._fb.group({
      lge: [this.lge, [Validators.required]],
      id: [this.id, [Validators.required]],
    });
  }

  /* To get value and navigate the link */
  private onClick(): void {
    this.utilsService.setLocalStorage('workingLge', this.myForm.controls['lge'].value);

    const url: string = this.utilsService.urlForm(this.tcode, this.myForm.controls['id'].value);
    this.router.navigate([url]);
  }

  /*
  private onClick(code: string, value: string): void {
    const url: string = this.utilsService.urlForm(this.prefix + code, value);
    this.router.navigate([url, {returnUrl: this.currentUrl}]);
  }
  */

  /* To return the home of tcode */
  private return(): void {
    this.utilsService.returnPrevious();
  }

}
