import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  async getCurrentWeather( lat: number, lon: number) {
    try {
      const url = `${base_url}/current-weather?lat=${lat}&lon=${lon}`;
      const result : any = await this.http.get(url).toPromise();
      console.log('RES', result);
      return result.data;
    } catch (error) {
      return error;
    }
  }

  getCurrentWeatherByHours( lat: number, lon: number, hours:number) {
    const url = `${base_url}/current-weather/future?lat=${lat}&lon=${lon}&cnt=${hours}`;
    
    return this.http.get(url).pipe(
      map((resp) => {
        return {
          result: resp['result'],
          data: resp['data']
        }
      })
    )
  }


}
