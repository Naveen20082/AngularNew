import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  booleanAttribute,
  numberAttribute,
  output,
  viewChild,
} from '@angular/core';
import { ShortStringPipe } from '../../pipes/short-string.pipe';
import { BackgroundColorDirective } from '../../directives/background-color.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CurrencyPipe,
    TitleCasePipe,
    ShortStringPipe,
    BackgroundColorDirective,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  constructor() {
    // runs after the class is ready
    console.log('Constructor');
  }

  //Input from Parent
  @Input({
    alias: 'userName',
    // , transform: (value: string) => { return "hii " + value }
  })
  name = '';

  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;

  /////////output to Parent

  @Output() myEvent = new EventEmitter<any>();
  // @Output() myEvent = new EventEmitter<string>()
  sendData(e: any) {
    this.myEvent.emit({
      name: this.name,
      isSingle: this.isSingle,
      salary: this.salary + 50,
    });
  }

  @Output() deleteUserEvent = new EventEmitter<any>();
  // @Output() deleteUserEvent = new EventEmitter<string>()
  deleteUser(e: any) {
    this.deleteUserEvent.emit({
      name: this.name,
      isSingle: this.isSingle,
      salary: this.salary,
    });
  }

  ngOnInit() {
    // runs after the component is ready
    //api calling
    // console.log("ngOnInit");
    // console.log("ngOnInit", this.heading?.nativeElement.textContent);
  }

  ngOnDestroy() {
    //cleanup
    //unregister event
    // console.log("ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if any changes occurs
    // console.log("ngOnChanges", this.heading?.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    // console.log("this.ngAfterViewInit", this.heading?.nativeElement.textContent);
  }

  //Templeate vVariable
  @ViewChild('myHeading') heading?: ElementRef;
}
