import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(public authService: FirebaseService) {}

  register(e: NgForm) {
    console.log(e.value);
    this.authService.registerUser(e.value.email, e.value.Password);
  }
  reset(e: NgForm) {
    e.reset();
  }
}
