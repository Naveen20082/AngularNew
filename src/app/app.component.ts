import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { TestComponent } from './Components/test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserProfileComponent, TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  users = [
    { name: "Naveen", isSingle: true, salary: 20000 },
    { name: "Naveen1", isSingle: false, salary: 5000 },
  ]

  recieveData(e: any) {
    this.users.forEach((child) => {
      if (child.name === e.name) {
        child.salary = e.salary;
      }
    })
  }

  addUser(e: any) {
    const userIndex = this.users.findIndex((user) => user.name === e.name)
    if (userIndex === -1) {
      this.users.push(e)
    } else {
      this.users[userIndex].salary = e.salary;
      this.users[userIndex].isSingle = e.isSingle;
    }
  }

  deleteUserEventFunc(e: any) {
    const userIndex = this.users.findIndex((userData) => userData.name === e.name);
    this.users.splice(userIndex, 1)
  }
}
