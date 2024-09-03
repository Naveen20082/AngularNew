import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, public authService: FirebaseService) {}

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
    // console.log(this.loginform.value);
    // this.router.navigate(['/']);

    this.authService.loginUser(
      this.loginform.value.email!,
      this.loginform.value.Password!
    );

    this.loginform.reset();
  }
}
