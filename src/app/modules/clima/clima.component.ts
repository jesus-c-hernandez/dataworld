import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //ampliar En los proximos días
  public ampliar(idSmall:string, idBig:string) {
    console.log('hola');
    //reducir big
    var big = document.getElementById(idBig);
    big.classList.toggle("ampliar-contenedor");
    big.classList.toggle("contenedor-small");
    //ampliar idSmall
    var small = document.getElementById(idSmall);
    small.classList.toggle("contenedor-small");
    small.classList.toggle("ampliar-contenedor");
  }

}
