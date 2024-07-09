import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute, output } from '@angular/core';
import { ShortStringPipe } from '../../pipes/short-string.pipe';
import { BackgroundColorDirective } from '../../directives/background-color.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe, ShortStringPipe, BackgroundColorDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  //Input from Parent
  @Input({
    alias: 'userName'
    // , transform: (value: string) => { return "hii " + value } 
  }) name = '';
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;


  /////////output to Parent

  @Output() myEvent = new EventEmitter<any>()
  // @Output() myEvent = new EventEmitter<string>()
  sendData(e: any) {
    this.myEvent.emit({ name: this.name, isSingle: this.isSingle, salary: this.salary + 50 });
  }


  @Output() deleteUserEvent = new EventEmitter<any>()
  // @Output() deleteUserEvent = new EventEmitter<string>()
  deleteUser(e: any) {
    this.deleteUserEvent.emit({ name: this.name, isSingle: this.isSingle, salary: this.salary });
  }
}
