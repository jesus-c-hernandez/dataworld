import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  lat: number = 0;
  lon: number = 0;

  constructor() {}

  getlocation() {
    return {
      lat: this.lat,
      lon: this.lon,
    };
  }

  setLocation(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }
}
