import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  async getCases(country: string) {
    try {
      const url = `${base_url}/cases?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async getTodayCases(country: string) {
    try {
      const url = `${base_url}/today-cases?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async getActiveCases(country: string) {
    try {
      const url = `${base_url}/active-cases?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async getTotalDeaths(country: string) {
    try {
      const url = `${base_url}/total-deaths?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async getTodayDeaths(country: string) {
    try {
      const url = `${base_url}/today-deaths?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async getRecoveredCases(country: string) {
    try {
      const url = `${base_url}/recovered-cases?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

  async getTestTotals(country: string) {
    try {
      const url = `${base_url}/test-totals?country=${country}`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
    } catch (error) {
      return error;
    }
  }

}

export interface CovidData{
    country?: string,
    cases?: number,
    todayCases: number,
    activeCases?: number,
    totalDeaths?: number,
    todayDeaths?: number,
    recoveredCases?: number,
    testTotals?: number;
}
