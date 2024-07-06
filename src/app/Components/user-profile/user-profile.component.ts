import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  name = "naveen";
  age = 24;
  isDisabled = false;

  ll = ["a", "b", "c"]

  onChange(e: Event) {
    const inputValue = (e.target as HTMLInputElement).value;
    this.name = inputValue;
  }

  onCLick() {
    console.log(this.name);
    this.name = "";
  }
}
