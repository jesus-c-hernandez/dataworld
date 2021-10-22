import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { SharedService } from 'src/app/core/Shared/shared.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  weather : any;
  weather3 : any;
  weather5 : any; 
  loading = true;

  constructor(
    private weatherService: WeatherService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  public horasIsSmall : boolean = true;
  public diasIsSmall : boolean = true;
  public condAdIsSmall : boolean = false;

  //para saber si mostrar o no la info adicional
  public mostrarInfoHoras : boolean = false;
  public mostrarInfoDias : boolean = false;
  public mostrarInfoCondAd : boolean = true;

  public proxDias = [
    {
      dia : "Lunes",
      descripcion : "cielo claro",
      temp_max: "35",
      temp_min: "20",
      speed: "15"
    },
    {
      dia : "Martes",
      descripcion : "cielo claro",
      temp_max: "35",
      temp_min: "20",
      speed: "15"
    },
    {
      dia : "Miércoles",
      descripcion : "cielo claro",
      temp_max: "35",
      temp_min: "20",
      speed: "15"
    },
    {
      dia : "Jueves",
      descripcion : "cielo claro",
      temp_max: "35",
      temp_min: "20",
      speed: "15"
    },
    {
      dia : "Viernes",
      descripcion : "cielo claro",
      temp_max: "35",
      temp_min: "20",
      speed: "15"
    }
  ];

  public toggle(indice:number){
    //proxHoras | proxDias
    let proxHoras = document.getElementById("proxHoras");
    let horas3 = document.getElementById("horas3");
    let horas5 = document.getElementById("horas5");
    let proxDias = document.getElementById("proxDias");
    let diasSmall = document.getElementById("diasSmall");
    let diasFull = document.getElementById("diasFull");
    let condAd = document.getElementById("condAd");
    let condAdCont = document.getElementById("condAd-cont");
    let condAdSmall = document.getElementById("condAdSmall");
    //botones
    let botonHoras = document.getElementById("botonHoras");
    let botonDias = document.getElementById("botonDias");
    let botonCondAd = document.getElementById("botonCondAd");
    let infoColumnas = document.getElementsByClassName("info-columna");
    let infoColumnasDias = document.getElementsByClassName("info-columna dias");

    if(indice == 1){
      //picó el boton ampliar condad
      //horas chico, dias chico, condad grande
      horas3.classList.remove("esconder");
      horas5.classList.add("esconder");
      proxHoras.classList.add("clima-horas");
      proxHoras.classList.remove("ampliar-horas");
      proxHoras.classList.remove("contenedor-horas-small");
      botonHoras.classList.remove("esconder");
      for(let i=0; i<infoColumnas.length; i++){
        infoColumnas[i].classList.add("esconder");
      }
      
      diasSmall.classList.remove("esconder");
      diasFull.classList.add("esconder");
      proxDias.classList.add("clima-dias");
      proxDias.classList.remove("ampliar-dias");
      proxDias.classList.remove("contenedor-dias-small");
      botonDias.classList.remove("esconder");
      for(let i=0; i<infoColumnasDias.length; i++){
        infoColumnasDias[i].classList.add("esconder");
      }

      condAdSmall.classList.add("esconder");
      condAd.classList.add("condiciones-adicionales");
      // condAd.classList.remove("condicion-adicional-small");
      condAdCont.classList.add("contenedor-cond-ad");
      condAdCont.classList.remove("esconder");
      // condAdCont.classList.remove("contenedor-cond-ad-small");
      botonCondAd.classList.add("esconder");
    } else if(indice == 2){
      //pico el boton ampliar horas
      //horas grande, dias chico, condad chico
      horas3.classList.add("esconder");
      horas5.classList.remove("esconder");
      proxHoras.classList.add("ampliar-horas");
      proxHoras.classList.remove("contenedor-horas-small");
      botonHoras.classList.add("esconder");
      for(let i=0; i<infoColumnas.length; i++){
        infoColumnas[i].classList.remove("esconder");
      }
      
      diasSmall.classList.remove("esconder");
      diasFull.classList.add("esconder");
      proxDias.classList.remove("ampliar-dias");
      proxDias.classList.add("contenedor-dias-small");
      botonDias.classList.remove("esconder");
      for(let i=0; i<infoColumnasDias.length; i++){
        infoColumnasDias[i].classList.add("esconder");
      }
      
      condAdSmall.classList.remove("esconder");
      condAd.classList.remove("condiciones-adicionales");
      // condAd.classList.add("condicion-adicional-small");
      condAdCont.classList.remove("contenedor-cond-ad");
      condAdCont.classList.add("esconder");
      // condAdCont.classList.add("contenedor-cond-ad-small");
      botonCondAd.classList.remove("esconder");
    } else if(indice == 3){
      //pico el boton ampliar dias
      //horas chico, dias grande, condad chico
      horas3.classList.remove("esconder");
      horas5.classList.add("esconder");
      proxHoras.classList.remove("ampliar-horas");
      proxHoras.classList.add("contenedor-horas-small");
      botonHoras.classList.remove("esconder");
      for(let i=0; i<infoColumnas.length; i++){
        infoColumnas[i].classList.add("esconder");
      }
      
      diasSmall.classList.add("esconder");
      diasFull.classList.remove("esconder");
      proxDias.classList.add("ampliar-dias");
      proxDias.classList.remove("contenedor-dias-small");
      botonDias.classList.add("esconder");
      for(let i=0; i<infoColumnasDias.length; i++){
        infoColumnasDias[i].classList.remove("esconder");
      }

      condAdSmall.classList.remove("esconder");
      condAd.classList.remove("condiciones-adicionales");
      // condAd.classList.add("condicion-adicional-small");
      condAdCont.classList.remove("contenedor-cond-ad");
      condAdCont.classList.add("esconder");
      // condAdCont.classList.add("contenedor-cond-ad-small");
      botonCondAd.classList.remove("esconder");
    }
  }

  bajar(idAbajo: string, idArriba1: string, idArriba2:string){
    const abajo = document.getElementById(idAbajo);
    const arriba1 = document.getElementById(idArriba1);
    const arriba2 = document.getElementById(idArriba2);

    //agregar la clase abajo al que se quiera bajar
    abajo.classList.add("abajo");
    //preguntar cuál es el que está abajo
    switch(idAbajo){
      case "proximasHoras":
        //mostrar info adicional de las horas
        this.mostrarInfoHoras = true;
        this.mostrarInfoDias = false;
        this.mostrarInfoCondAd = false;
        break;
      case "proximosDias":
        //mostrar info adicional de las horas
        this.mostrarInfoHoras = false;
        this.mostrarInfoDias = true;
        this.mostrarInfoCondAd = false;
        break;
      case "condicionesAd":
        //mostrar info adicional de las horas
        this.mostrarInfoHoras = false;
        this.mostrarInfoDias = false;
        this.mostrarInfoCondAd = true;
        break;
      default:
        //mostrar info adicional de las horas
        this.mostrarInfoHoras = false;
        this.mostrarInfoDias = false;
        this.mostrarInfoCondAd = true;
        break;
    }
    
    //validar que los que se quieran subir no tengan la clase abajo
    if(arriba1.classList.contains("abajo")){
      arriba1.classList.remove("abajo");
    }
    if(arriba2.classList.contains("abajo")){
      arriba2.classList.remove("abajo");
    }
    //agregar la clase arriba al que se quiera subir
    //validar si que no la tenga
    if(!arriba1.classList.contains("arriba")){
      arriba1.classList.add("arriba");
    }
    if(!arriba2.classList.contains("arriba")){
      arriba2.classList.add("arriba");
    }
  }

  init() {

    const {lat, lon } = this.sharedService.getlocation();

    this.weatherService.getCurrentWeather(lat, lon).subscribe( (resp) => {
      console.log('RESP', resp);
      this.weather = resp.data;      

      console.log('Wea', this.weather); 

      this.loading = false;
    });

    this.weatherService.getCurrentWeatherByHours( lat, lon, 3).subscribe( (resp) => {
      this.weather3 = resp.data;      

      console.log('weather3', this.weather3); 

      this.loading = false;
    });

    this.weatherService.getCurrentWeatherByHours( lat, lon, 5).subscribe( (resp) => {
      console.log('RESP', resp);
      this.weather5 = resp.data;      

      console.log('Wea', this.weather5); 

      this.loading = false;
    });
  }

}
