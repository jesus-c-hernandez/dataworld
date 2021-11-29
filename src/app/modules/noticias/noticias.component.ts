import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/core/services/news/news.service';

import { Constants } from '../../Constants';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent implements OnInit {
  //pantalla de carga
  loading = true;

  healthNews: any;
  techNews: any;
  scienceNews: any;
  arreglo: string[] = ['salud', 'tec', 'ciencia'];

  Constants: any = Constants;

  //para el scroll
  @ViewChild('body') contenedorTodo: ElementRef;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    // this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    // console.log('RESP', this.weather);
    let country = localStorage.getItem('countryShort').toLowerCase();

    this.healthNews = await this.newsService.getHealthNews(country);
    //para comprobar que el objeto traiga noticias
    if (this.healthNews.pagination.count == 0) {
      //no trae noticias del país, mostrar las de USA
      country = 'us';
      this.healthNews = await this.newsService.getHealthNews(country);
      console.log('healthNews', this.healthNews);
    }

    this.techNews = await this.newsService.getTechnologyNews(country);
    // console.log('techNews', this.techNews);

    this.scienceNews = await this.newsService.getScienceNews(country);
    // console.log('scienceNews', this.scienceNews);

    this.loading = false;
  }

  scrollTop() {
    this.contenedorTodo.nativeElement.scrollTop = 0;
  }
}
