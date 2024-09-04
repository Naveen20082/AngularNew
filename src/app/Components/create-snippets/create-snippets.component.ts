import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DBServiceService } from '../../Services/dbservice.service';

@Component({
  selector: 'app-create-snippets',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-snippets.component.html',
  styleUrl: './create-snippets.component.css',
})
export class CreateSnippetsComponent {
  constructor(private DbServices: DBServiceService) {}

  title: any = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  quote: any = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  creteSnippet = new FormGroup({
    title: this.title,
    quote: this.quote,
  });

  addQuote() {
    this.DbServices.addUserSnippet(this.creteSnippet.value!);
  }
}
