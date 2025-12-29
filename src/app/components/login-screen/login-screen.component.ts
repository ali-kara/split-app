import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/api/AccountService';
import { BaseService } from 'src/app/api/BaseService';
@Component({
  standalone: false,
selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent extends BaseService {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    super();
  }

  form!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  // convenience getter for easy access to form fields

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  logout() {
    this.logout();
  }

  login() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    var a = this.accountService
      .login(this.f['username'].value, this.f['password'].value)
      .subscribe((data) => {
        if (data.success == true) {
          localStorage.setItem('currentUser', JSON.stringify(data.data));
          console.log(JSON.stringify(data.data));

          this.toastr.showSuccess('Success', 'Logged In');

          this.router.navigate(['home']);
        } else {
          this.toastr.showError('Error', data.message);
        }
      });
  }
}

