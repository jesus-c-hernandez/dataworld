import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/core/services/news/news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  healthNews : any;
  techNews: any;
  scienceNews: any;
  arreglo: string [] = ["salud", "tec", "ciencia"];

  //para el scroll
  @ViewChild('body') contenedorTodo : ElementRef;

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    // this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    // console.log('RESP', this.weather);
    let country = 'us';
    this.healthNews = await this.newsService.getHealthNews(country);

    this.techNews = await this.newsService.getTechnologyNews(country);
    console.log('techNews', this.techNews);

    this.scienceNews = await this.newsService.getScienceNews(country);
    console.log('scienceNews', this.scienceNews);
  }

  scrollTop(){
    this.contenedorTodo.nativeElement.scrollTop = 0;
  }
}
