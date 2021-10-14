import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentWeather : any;

  constructor() { }

  getCurrentWeather () {
    return this.currentWeather;
  }

  setCurrentWeather( weather ) {
    this.currentWeather = weather;
  }
}
