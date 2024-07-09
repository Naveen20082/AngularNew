import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  name: string = "";
  age: number = 24;
  salary!: number;
  isSingle: boolean = false;
  isDisabled: boolean = false;

  users: any = []

  // onChange(e: Event) {
  //   const inputValue = (e.target as HTMLInputElement).value;
  //   this.name = inputValue;
  // }

  @Output() newUser = new EventEmitter<any>()

  onCLick(e: any) {
    this.users.push(this.name)
    this.newUser.emit({ isSingle: this.isSingle, salary: this.salary, name: this.name })
    this.name = "";
  }


}
