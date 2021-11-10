import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { CovidService, CovidData } from 'src/app/core/services/covid/covid.service';

// import moment from 'moment';
// const moment = require('moment'); // require
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //pantalla de carga
  loading = true;
  
  //para banner
  dayImage: string;
  //para saber qué hora es
  today = new Date();
  time = this.today.getHours();
  //para el color del texto
  text_color = "black";

  weather: any;
  weather3 : any;
  

  //info covid
  covidData: CovidData = null;
  datos = [];

  constructor(private weatherService: WeatherService,
              private covidService: CovidService) { }

  ngOnInit(): void {
    this.currentWeather();
    this.infoCovid();
  }

  async currentWeather () {
    // const {lat, lon} = await this.geolocationService.getPosition();
    // localStorage.setItem('lat', String(lat))
    // localStorage.setItem('lon', String(lon))
    const lat = Number(localStorage.getItem('lat'));
    const lon = Number(localStorage.getItem('lon'));
    console.log('POS', lat ,lon);

    this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    console.log('RESP', this.weather);

    this.weather3 = await this.weatherService.getCurrentWeatherByHours( lat, lon, 3);
    console.log('RESP3', this.weather3);

    const dateTime = new Date();
    
    // Cambiar de zona horaria las proximas horas
    this.weather3.list.forEach( date  => {
      const weatAux = moment(date.dt_txt).subtract( dateTime.getTimezoneOffset(), 'minutes').format('DD MM YYYY hh:mm:ss a');
      date.dt_txt = weatAux;
    });

    this.horaDelDia();

    this.loading = false;

    // setTimeout(() => {
    //   this.loading = false;
    //  }, 1000);
  }

  inicializarCovidData(): void{
    this.covidData = {
      country : "",
      todayCases: 0,
      activeCases : 0,
      todayDeaths : 0,
    };
  }

  async infoCovid() {
    this.inicializarCovidData();
    //const lat = Number(localStorage.getItem('lat'));
    //const lon = Number(localStorage.getItem('lon'));
    // let country = this.getCountry(lat, lon);
    let country = "Mexico";
    // this.covidData.country = country;
    // let datos = [];
    this.covidData.country = country;
    //casos totales
    //this.covidData.todayCases = await this.covidService.getTodayCases(country);
    //casos activos
    //this.covidData.activeCases = await this.covidService.getActiveCases(country);
    //muertes de hoy
    //this.covidData.todayDeaths = await this.covidService.getTodayDeaths(country);

    console.log('covidData', this.covidData);
  }

  horaDelDia(){
    //banner
    if(this.time >= 0 && this.time <= 6){
      this.text_color = "white";
      this.dayImage = 'night-sky';
    } else if(this.time > 6 && this.time <= 8){
      this.text_color = "black";
      this.dayImage = 'morning-sky';
    } else if(this.time > 8 && this.time <= 18){
      this.text_color = "black";
      this.dayImage = 'day-sky';
    } else if(this.time > 18 && this.time <= 20){
      this.text_color = "black";
      this.dayImage = 'evening-sky';
    } else if(this.time > 20 && this.time <= 23){
      this.text_color = "white";
      this.dayImage = 'night-sky';
    } else {
      this.text_color = "black";
      this.dayImage = 'day-sky';
    }
  }


}
