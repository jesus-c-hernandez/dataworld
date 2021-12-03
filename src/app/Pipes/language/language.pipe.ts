import { Pipe, PipeTransform } from '@angular/core';
import { BarVerticalNormalizedComponent } from '@swimlane/ngx-charts';
import { from } from 'rxjs';

const lenguajeValue: any = localStorage.getItem('language');
const valueLen = lenguajeValue === null || lenguajeValue === '' || lenguajeValue === undefined ? 'es' : lenguajeValue;


import { Constants } from '../../Constants'

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value, type, mod): String {
    const valor = Constants[mod][type][value];
    console.log('VALOR', valor);
    return valor;
    
  }

}
