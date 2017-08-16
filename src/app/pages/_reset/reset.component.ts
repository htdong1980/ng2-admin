import { BcUtilsService } from '../../theme/services/bcUtils';

import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reset',
  templateUrl: './reset.html',
  styleUrls: ['./reset.scss'],
})
export class ResetComponent {

  public form: FormGroup;
  public email: AbstractControl;
  public token: AbstractControl;
  public submitted: boolean = false;

  model: any = {};

  constructor(private fb: FormBuilder, private utilsService: BcUtilsService) {
    // get token
    this.model.token = this.utilsService.getToken();

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'token': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.email = this.form.controls['email'];
    this.token = this.form.controls['token'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
    }
  }
}
