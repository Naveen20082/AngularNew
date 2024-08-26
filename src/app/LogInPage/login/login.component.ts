import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  Password: any = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  email: any = new FormControl('', [Validators.required, Validators.email]);

  loginform = new FormGroup({
    email: this.email,
    Password: this.Password,
  });

  login() {
    console.log(this.loginform.value);
    this.router.navigate(['/']);
  }

  reset() {
    this.loginform.reset();
  }
}
