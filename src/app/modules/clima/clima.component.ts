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
  cantHoras: number = 3;
  cantDias: number = 3;
  //para almacenar las condiciones adicionales

  //pantalla de carga
  loading: boolean = true;;

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

  bajar(idAbajo: string, idArriba1: string, idArriba2:string){
    const abajo = document.getElementById(idAbajo);
    const arriba1 = document.getElementById(idArriba1);
    const arriba2 = document.getElementById(idArriba2);

    //preguntar cuál es el que está abajo
    switch(idAbajo){
      case "proximasHoras":
        //mostrar info adicional de las horas
        this.mostrarInfoHoras = true;
        this.mostrarInfoDias = false;
        this.mostrarInfoCondAd = false;
        this.cantHoras = 5;
        this.cantDias = 3;
        break;
      case "proximosDias":
        //mostrar info adicional de los dias
        this.mostrarInfoHoras = false;
        this.mostrarInfoDias = true;
        this.mostrarInfoCondAd = false;
        this.cantHoras = 3;
        this.cantDias = 5;
        break;
      case "condicionesAd":
        //mostrar info adicional de las condiciones adicionales
        this.mostrarInfoHoras = false;
        this.mostrarInfoDias = false;
        this.mostrarInfoCondAd = true;
        this.cantHoras = 3;
        this.cantDias = 3;
        break;
      default:
        //mejor no hacer nada
        break;
    }

    //agregar la clase abajo al que se quiera bajar
    abajo.classList.add("abajo");
    if(abajo.classList.contains("arriba")){
      abajo.classList.remove("arriba");
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
    // console.log(idAbajo, 'se bajó');
    
  }

  async init() {

    const lat = Number(localStorage.getItem('lat'));
    const lon = Number(localStorage.getItem('lon'));


    this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    console.log('RESP', this.weather);

    // this.weatherService.getCurrentWeather(lat, lon).subscribe( (resp) => {
      
    //   this.weather = resp.data;
    // });

    // this.weatherService.getCurrentWeatherByHours( lat, lon, 3).subscribe( (resp) => {
    //   this.weather3 = resp.data;
    // });

    this.weatherService.getCurrentWeatherByHours( lat, lon, 5).subscribe( (resp) => {
      this.weather5 = resp.data;
    });

    setTimeout(() => {
      this.loading = false;
     }, 2000);
  }

}
