import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  async getHealthNews( country: string) {
    try {
      const url = `${base_url}/news-health?countries=${country}&languages=en`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
      return [];
    } catch (error) {
      return error;
    }
  }

  async getTechnologyNews( country: string) {
    try {
      const url = `${base_url}/news-technology?countries=${country}&languages=en`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
      return [];

    } catch (error) {
      return error;
    }
  }

  async getScienceNews( country: string) {
    try {
      const url = `${base_url}/news-science?countries=${country}&languages=en`;
      const result : any = await this.http.get(url).toPromise();
      return result.data;
      return [];

    } catch (error) {
      return error;
    }
  }
}
