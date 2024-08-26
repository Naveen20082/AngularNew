import { Component } from '@angular/core';
import { GetAPIsService } from '../../Services/get-apis.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  providers: [GetAPIsService],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent {
  jokeMessage: string = '';

  constructor(public jokes: GetAPIsService) {}
  ngOnInit() {
    this.callAnotherJoke();
  }

  callAnotherJoke() {
    this.jokes.getApi().subscribe({
      next: (data: any) => (this.jokeMessage = data.value),
      error: (data: any) => console.log('Error hai', data),
    });
  }
}
