import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { SharedService } from 'src/app/core/Shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
    console.log('POS', lat ,lon);

    this.sharedService.setLocation( lat, lon );
    
    this.weatherService.getCurrentWeather(lat, lon).subscribe( (resp) => {
      console.log('RESP', resp);
      this.weather = resp.data;      

      console.log('Wea', this.weather); 
    });

    this.weatherService.getCurrentWeatherByHours( lat, lon, 3).subscribe( (resp) => {
      this.weather3 = resp.data;      

      console.log('weather3', this.weather3); 

    });

    setTimeout(() => {
      this.loading = false;
     }, 1800);

  }


}
