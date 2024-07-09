import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString',
  standalone: true
})
export class ShortStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value?.slice(0, 10) + "...";
  }

}
