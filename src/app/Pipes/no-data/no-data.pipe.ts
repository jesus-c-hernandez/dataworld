import { Pipe, PipeTransform } from '@angular/core';

const lenguajeValue: any = localStorage.getItem('language');
const valueLen = lenguajeValue === null || lenguajeValue === '' || lenguajeValue === undefined ? 'es' : lenguajeValue;

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  transform(value: any, unit: string = ''): String {
    if ( value === 'No Disponible' ) {
      return valueLen === 'es' ? `No Disponible` : 'Not Available';
    } else {
      return value? `${value} ${unit}` : valueLen === 'es' ? `No Disponible` : 'Not Available';
    }
  }

}
