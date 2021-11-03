import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { SharedService } from 'src/app/core/Shared/shared.service';

// import moment from 'moment';
// const moment = require('moment'); // require
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //para banner
  dayImage: string;

  weather: any;
  weather3 : any;
  loading = true;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void {
    this.currentWeather();
  }

  async currentWeather () {
    const {lat, lon} = await this.geolocationService.getPosition();
    localStorage.setItem('lat', String(lat))
    localStorage.setItem('lon', String(lon))

    console.log('POS', lat ,lon);

    this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    console.log('RESP', this.weather);

    this.weather3 = await this.weatherService.getCurrentWeatherByHours( lat, lon, 3);
    console.log('RESP3', this.weather3);

    const dateTime = new Date();
    
    // Cambiar de zona horaria las proximas horas
    this.weather3.list.forEach( date  => {
      const weatAux = moment(date.dt_txt).subtract( dateTime.getTimezoneOffset(), 'minutes').format('DD MM YYYY hh:mm:ss');
      date.dt_txt = weatAux;
    });    

    //banner
    const today = new Date();
    const time = today.getHours();

    if(time >= 0 && time <= 6){
      this.dayImage = 'night-sky';
    } else if(time > 6 && time <= 8){
      this.dayImage = 'morning-sky';
    } else if(time > 8 && time <= 18){
      this.dayImage = 'day-sky';
    } else if(time > 18 && time <= 20){
      this.dayImage = 'evening-sky';
    } else if(time > 20 && time <= 23){
      this.dayImage = 'night-sky';
    } else {
      this.dayImage = 'day-sky';
    }
    

      this.loading = false;

    // setTimeout(() => {
    //   this.loading = false;
    //  }, 1000);

  }


}
