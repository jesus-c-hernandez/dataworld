import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import * as moment from 'moment';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  //para banner
  dayImage: string;
  //para saber qué hora es
  today = new Date();
  time = this.today.getHours();
  //para el color del texto
  text_color = "black";
  
  weather : any;
  weather3 : any;
  weather5 : any; 
  cantHoras: number = 3;
  cantDias: number = 3;

  //para almacenar las condiciones adicionales
  datosClimaHoy : any[] = [];

  //pantalla de carga
  loading: boolean = true;;

  constructor(
    private weatherService: WeatherService
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

  public condiciones: string[] = ['temp_min'];

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
    
    this.guardarDatosWeather();

    // this.weatherService.getCurrentWeather(lat, lon).subscribe( (resp) => {
      
    //   this.weather = resp.data;
    // });

    // this.weatherService.getCurrentWeatherByHours( lat, lon, 3).subscribe( (resp) => {
    //   this.weather3 = resp.data;
    // });

    this.weather5 = await this.weatherService.getCurrentWeatherByHours( lat, lon, 5);

    const dateTime = new Date();
    
    // Cambiar de zona horaria las proximas horas
    this.weather5.list.forEach( date  => {
      const weatAux = moment(date.dt_txt).subtract( dateTime.getTimezoneOffset(), 'minutes').format('DD MM YYYY hh:mm:ss a');
      date.dt_txt = weatAux;
    });

    this.horaDelDia();
    
    setTimeout(() => {
      this.loading = false;
     }, 2000);
  }

  guardarDatosWeather(){
    this.datosClimaHoy[0] = {
      property : 'temp_min',
      title : "Temperatura mínima",
      value : this.validateValues(Math.round(this.weather.main.temp_min), '°'),
      icon : 'temp_min',
      unit : '°'
    };
    this.datosClimaHoy[1] = {
      property : 'temp_max',
      title : "Temperatura máxima",
      value : this.validateValues(Math.round(this.weather.main.temp_max), '°'),
      icon : 'temp_max',
      unit : '°'
    };
    this.datosClimaHoy[2] = {
      property : 'speed',
      title : "Velocidad del viento",
      value : this.validateValues(this.weather.wind.speed, '°'),
      icon : 'speed',
      unit : '°'
      
    };
    this.datosClimaHoy[3] = {
      property : 'pressure',
      title : "Presión",
      value : this.validateValues(this.weather.main.pressure, 'hPa'),
      icon : 'pressure',
      unit : 'hPa'
    }
    this.datosClimaHoy[4] = {
      property : 'humidity',
      title : "Humedad",
      value : this.validateValues(this.weather.main.humidity, '%'),
      icon : 'humidity',
      unit : '%'
       }
    this.datosClimaHoy[5] = {
      property : 'sea_level',
      title : "Presión a nivel del mar",
      value : this.validateValues(this.weather.main.sea_level, 'hPa'),
      icon : 'sea-level',
      unit : 'hPa'
    }
    this.datosClimaHoy[6] = {
      property : 'grnd_level',
      title : "Presión a nivel del suelo",
      value : this.validateValues(this.weather.main.grnd_level, 'hPa'),
      icon : 'pressure',
      unit : 'hPa'
    }
    this.datosClimaHoy[7] = {
      property : 'visibility',
      title : "Visibilidad",
      value : this.validateValues(this.weather.visibility, 'm'),
      icon : 'visibility',
      unit : 'm'
    }
    this.datosClimaHoy[8] = {
      property : 'deg',
      title : "Dirección del viento",
      value : this.validateValues(this.weather.wind.deg, '°'),
      icon : 'deg',
      unit : '°'
    }
    this.datosClimaHoy[9] = {
      property : 'gust',
      title : "Ráfaga de viento",
      value : this.validateValues(this.weather.wind.gust, 'm/seg'),
      icon : 'gust',
      unit : 'm/seg'
    }
    this.datosClimaHoy[10] = {
      property : 'all',
      title : "Nubosidad",
      value : this.validateValues(this.weather.clouds.all, '%'),
      icon : 'all',
      unit : '%'
    }
    this.datosClimaHoy[11] = {
      property : 'rain1h3h',
      title : "Volumen de lluvia (Últ. hr)",
      value : this.validateValues(this.weather.rain, 'mm'),
      icon : 'rain1h3h',
      unit : 'mm'
    }
    this.datosClimaHoy[12] = {
      property : 'rain1h3h',
      title : "Volumen de lluvia (Últ. 3 hr)",
      value : this.validateValues(this.weather.rain, 'mm'),
      icon : 'rain1h3h',
      unit : 'mm'
    }
    this.datosClimaHoy[13] = {
      property : 'snow1h3h',
      title : "Volumen de nieve (Últ. hr)",
      value : this.validateValues(this.weather.snow ,'mm'),
      icon : 'snow1h3h',
      unit : 'mm'
    }
    this.datosClimaHoy[14] = {
      property : 'snow1h3h',
      title : "Volumen de nieve (Últ. 3 hr)",
      value : this.validateValues(this.weather.snow, 'mm'),
      icon : 'snow1h3h',
      unit : 'mm'
    }
    this.datosClimaHoy[15] = {
      property : 'sunrise',
      title : "Amanecer",
      value : this.validateValues(this.weather.sys.sunrise),
      icon : 'sunrise',
      unit : ''
    }
    this.datosClimaHoy[16] = {
      property : 'sunset',
      title : "Anochecer",
      value : this.validateValues(this.weather.sys.sunset),
      icon : 'sunset',
      unit : ''
    }
    this.datosClimaHoy[17] = {
      property : 'timezone',
      title : "Zona horaria",
      value : this.validateValues(this.weather.timezone) ,
      icon : 'timezone',
      unit : ''
    }
    console.log('datosClimaHoy', this.datosClimaHoy);
  }

  validateValues(value, unit = ''){
    return value? `${value} ${unit}` : 'No Disponible';
  }

  horaDelDia(){
    //banner
    if(this.time >= 0 && this.time <= 6){
      this.text_color = "white";
      this.dayImage = 'night-sky';
    } else if(this.time > 6 && this.time <= 8){
      this.text_color = "black";
      this.dayImage = 'morning-sky';
    } else if(this.time > 8 && this.time <= 17){
      this.text_color = "black";
      this.dayImage = 'day-sky';
    } else if(this.time > 17 && this.time <= 19){
      this.text_color = "black";
      this.dayImage = 'evening-sky';
    } else if(this.time > 19 && this.time <= 23){
      this.text_color = "white";
      this.dayImage = 'night-sky';
    } else {
      this.text_color = "black";
      this.dayImage = 'day-sky';
    }
  }

}
