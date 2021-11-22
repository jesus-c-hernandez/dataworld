import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nightIcon'
})
export class NightIconPipe implements PipeTransform {

  transform(value: string): string {
    if(value == "cielo claro" || value == "algo de nubes"){
      return value+"-night";
    } else {
      return value;
    }
  }

}
