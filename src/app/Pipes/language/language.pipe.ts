import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';

const lenguajeValue: any = localStorage.getItem('language');
const valueLen = lenguajeValue === null || lenguajeValue === '' || lenguajeValue === undefined ? 'es' : lenguajeValue;


import { Constants } from '../../Constants'

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value, type, mod): String {
    return valueLen === 'es'? value : Constants[mod][type][value];
  }

}
