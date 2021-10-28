import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  transform(value: any, unit: string = ''): String {
    return value? `${value} ${unit}` : `No disponible`;
  }

}
