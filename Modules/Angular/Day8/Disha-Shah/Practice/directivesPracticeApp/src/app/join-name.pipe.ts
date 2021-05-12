import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinName'
})
export class JoinNamePipe implements PipeTransform {

  transform(fname: string, lname: string): string {
    return fname.concat('.', lname);
  }

}
