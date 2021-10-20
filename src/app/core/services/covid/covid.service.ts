import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidData(country: string, peticion: string) {
        let resultado;
        
        const url = `${base_url}/${peticion}?country=${country}`;
        console.log('URL',url);
        return this.http.get(url).pipe(
            map((resp) => {
                return {
                result: resp['result'],
                data: resp['data']
                }
            })
        );
  }

}

export interface CovidData{
    country: string,
    cases: number,
    todayCases: number,
    activeCases: number,
    totalDeaths: number,
    todayDeaths: number,
    recoveredCases: number,
    testTotals: number;
}
