import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { UserService } from '../../core/services/user.service';

import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {

  public form: FormGroup;
  public firstname: AbstractControl;
  public lastname: AbstractControl;
  public username: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;

  // Add by HTD
  model: any = {};
  loading = false;

  constructor(private router: Router,
        private userService: UserService,
        // private alertService: AlertService,
        private fb: FormBuilder) {

    this.form = fb.group(
      {
        'firstname': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'lastname': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
        'passwords': fb.group(
          {
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          },
          {
            validator: EqualPasswordsValidator.validate('password', 'repeatPassword'),
          },
        ),
    });

    this.firstname = this.form.controls['firstname'];
    this.lastname = this.form.controls['lastname'];
    this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      this.register();
    }
  }

  // Add by HTD
  register() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                // this.alertService.error(error._body);
                this.loading = false;
            });
    }
}
