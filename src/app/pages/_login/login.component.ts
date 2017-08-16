import { BcUtilsService } from '../../theme/services/bcUtils';

import { AuthenticationService } from '../../core/services/authentication.service';

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public token: AbstractControl;
  public submitted: boolean = false;

  model: any = {};
  loading = false;
  returnUrl: string;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private utilsService: BcUtilsService ) {

    // get token
    this.model.token = this.utilsService.getToken();

    // reset login status
    this.utilsService.logOut();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'token': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.token = this.form.controls['token'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // console.log(values);
      this.login();
    }
  }

  login() {
    this.loading = true;
    this.utilsService.setToken(this.model.token);
    this.authenticationService.login(this.model.username, this.model.password, this.model.token)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.alertService.error(error._body);
          this.message = error._body;
          this.loading = false;
        });
    }
}
