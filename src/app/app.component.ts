import { Component } from '@angular/core';
import { GeolocationService } from './core/services/geolocation/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataworld';

  latitude: number;
  longitude: number;

  constructor(
    private geolocationService: GeolocationService 
  ){
    this.getLocation();
  }

  getLocation() {
    this.geolocationService.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
        console.log('POS', pos);
    }).catch( pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
      console.log('POS ERR', pos);
    })
}
}
