import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter'
})
export class TimeFormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${this.getMinutes(value)}:${this.getSeconds(value)}`;
  }

  getMinutes ( src): number {
    return Math.floor(src / 60);
  }


  getSeconds ( src): number {
    return Math.floor(src % 60);
  }
}
