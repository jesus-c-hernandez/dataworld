import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

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

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.currentWeather();
  }

  async currentWeather () {
    // const {lat, lon} = await this.geolocationService.getPosition();
    // localStorage.setItem('lat', String(lat))
    // localStorage.setItem('lon', String(lon))
    const lat = Number(localStorage.getItem('lat'));
    const lon = Number(localStorage.getItem('lon'));
    console.log('POS', lat ,lon);

    // this.sharedService.setLocation( lat, lon );
    
    // this.weatherService.getCurrentWeather(lat, lon).subscribe( (resp) => {
    //   console.log('RESP', resp);
    //   this.weather = resp.data;      

    //   console.log('Wea', this.weather); 
    // });

    this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    console.log('RESP', this.weather);

    this.weather3 = await this.weatherService.getCurrentWeatherByHours( lat, lon, 3);

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
    

    setTimeout(() => {
      this.loading = false;
     }, 1800);

  }


}
