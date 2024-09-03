import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(public authService: FirebaseService) {
    // runs after the class is ready
    console.log('Constructor');
  }

  ngOnInit() {
    // runs after the component is ready
    //api calling
  }

  ngOnDestroy() {
    //cleanup
    //unregister event
  }

  // Logout() {
  //   const auth = this.authService.logOut();
  // }
}
