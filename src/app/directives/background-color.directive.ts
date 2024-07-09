import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective {

  constructor(private el: ElementRef) {
    this.el = el;
  }

  @HostBinding("style.backgroundColor")
  bgColor = "red";

  @HostBinding("style.color")
  color = "white";

  @HostBinding("style.padding")
  padding = "5px";

  @HostListener('mouseenter')
  changeColorOnEnter() {
    this.color = "black";
    this.el.nativeElement.style.fontSize = "20px"
  }

  @HostListener('mouseleave')
  changeColorOnLeave() {
    this.color = "white";
    this.el.nativeElement.style.fontSize = "15px"
  }
}
