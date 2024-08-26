import {
  Injectable,
  OnInit,
  Signal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAPIsService implements OnInit {
  constructor(public http: HttpClient) {
    effect(() => {
      console.log(this.count(), this.doubleCound()); //runs every time with changes in signal
    });
  }

  ngOnInit(): void {}

  //Writable Signal
  count: any = signal(0);
  //Readable  Signal
  doubleCound: Signal<number> = computed(() => this.count() * 2); // value derived from another varaible not able to set it

  getApi() {
    return this.http.get(
      'https://api.chucknorris.io/jokes/random?category=dev'
    );
  }

  getCount() {
    return this.count();
  }

  addCount() {
    /////////////////////////Signals//////////////////////////Writable/////Readable///////

    // this.count.set(this.count() + 1);// Direct value pass

    this.count.update((oldVal: any) => {
      return oldVal + 1;
    }); //change value dynamically

    // return this.count++;
  }
}
