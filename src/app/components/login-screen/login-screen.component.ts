import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/api/AccountService';
import { BaseService } from 'src/app/api/BaseService';
@Component({
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
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  // convenience getter for easy access to form fields

  get f() {
    return this.form.controls;
  }

  logout() {
    this.logout();
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    var a = this.accountService.login(
      this.f['username'].value,
      this.f['password'].value
    );

    this.toastr.showSuccess('Success', 'Logged In');

    this.router.navigate(['home']);
  }
}
