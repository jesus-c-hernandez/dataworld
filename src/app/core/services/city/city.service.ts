import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  async getCities() {
    try {
      const url = `${base_url}/cities`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

}
