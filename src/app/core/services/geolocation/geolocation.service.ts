import { Injectable } from '@angular/core';
 


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
                resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
            },
            err => {
                reject({lat: 25.55904, lon: -103.497728});
          });
    });
}

}
