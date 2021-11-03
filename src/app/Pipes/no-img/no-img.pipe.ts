import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg'
})
export class NoImgPipe implements PipeTransform {

  transform(value: string): string {
    return value? `background-image: url( ${value} );` : 'background-image: url(../assets/img/img-default.jpg);';
  }

}
