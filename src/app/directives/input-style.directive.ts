import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appInputStyle]',
  standalone: true,
})
export class InputStyleDirective {
  constructor(private el: ElementRef) {}

  @HostBinding('style.padding')
  padding = '5px';

  @HostListener('mouseenter')
  changeCC() {
    this.el.nativeElement.color = 'blue';
  }
}
