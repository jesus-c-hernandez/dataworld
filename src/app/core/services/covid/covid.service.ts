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

  getCases(country: string) {
        const url = `${base_url}/cases?country=${country}`;
        return this.http.get(url).pipe(
            map((resp) => {
                return {
                result: resp['result'],
                data: resp['data']
                }
            })
        );
  }

  getTodayCases(country: string) {
    const url = `${base_url}/today-cases?country=${country}`;
    return this.http.get(url).pipe(
        map((resp) => {
            return {
            result: resp['result'],
            data: resp['data']
            }
        })
    );
  }

  getActiveCases(country: string) {
    const url = `${base_url}/active-cases?country=${country}`;
    return this.http.get(url).pipe(
        map((resp) => {
            return {
            result: resp['result'],
            data: resp['data']
            }
        })
    );
  }

  getTotalDeaths(country: string) {
    const url = `${base_url}/total-deaths?country=${country}`;
    return this.http.get(url).pipe(
        map((resp) => {
            return {
            result: resp['result'],
            data: resp['data']
            }
        })
    );
  }

  getTodayDeaths(country: string) {
    const url = `${base_url}/today-deaths?country=${country}`;
    return this.http.get(url).pipe(
        map((resp) => {
            return {
            result: resp['result'],
            data: resp['data']
            }
        })
    );
  }

  getRecoveredCases(country: string) {
    const url = `${base_url}/recovered-cases?country=${country}`;
    return this.http.get(url).pipe(
        map((resp) => {
            return {
            result: resp['result'],
            data: resp['data']
            }
        })
    );
  }

  getTestTotals(country: string) {
    const url = `${base_url}/test-totals?country=${country}`;
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
