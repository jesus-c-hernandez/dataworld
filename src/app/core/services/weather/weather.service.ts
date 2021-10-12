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


  getCurrentWeather( lat: number, lon: number) {
    const url = `${base_url}/current-weather?lat=${lat}&lon=${lon}`;
    
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
