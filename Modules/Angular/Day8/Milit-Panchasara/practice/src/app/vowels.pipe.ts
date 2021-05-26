import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels'
})
export class VowelsPipe implements PipeTransform {

  transform(value: string): string {
    var str = value.match(/[aeiou]/gi)?.join('');
    return <string>str;
  }
}
