import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nightIcon'
})
export class NightIconPipe implements PipeTransform {

  transform(value: unknown): string {
    if(value == "cielo claro" || value == "algo de nubes"){
      return value+"-night";
    }
  }

}
