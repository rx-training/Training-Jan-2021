import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, precision: number):  number {
    return parseFloat(value.toFixed((isNaN(precision) || precision < 0)?0:precision));
  }

}
