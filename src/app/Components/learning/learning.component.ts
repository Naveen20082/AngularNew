import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TestComponent } from '../test/test.component';
import { JokesComponent } from '../jokes/jokes.component';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    UserProfileComponent,
    TestComponent,
    JokesComponent,
  ],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'], // corrected from styleUrl to styleUrls
})
export class LearningComponent {
  title = 'my-app';

  users = [
    { name: 'Naveen', isSingle: true, salary: 20000 },
    { name: 'Naveen1', isSingle: false, salary: 5000 },
  ];

  recieveData(e: any) {
    this.users.forEach((child) => {
      if (child.name === e.name) {
        child.salary = e.salary;
      }
    });
  }

  addUser(e: any) {
    const userIndex = this.users.findIndex((user) => user.name === e.name);
    if (userIndex === -1) {
      this.users.push(e);
    } else {
      this.users[userIndex].salary = e.salary;
      this.users[userIndex].isSingle = e.isSingle;
    }
  }

  deleteUserEventFunc(e: any) {
    const userIndex = this.users.findIndex(
      (userData) => userData.name === e.name
    );
    this.users.splice(userIndex, 1);
  }
}
