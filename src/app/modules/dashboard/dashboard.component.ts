import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { CovidService, CovidData } from 'src/app/core/services/covid/covid.service';
import { NewsService } from 'src/app/core/services/news/news.service';

// import moment from 'moment';
// const moment = require('moment'); // require
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public typeN = 1;
  public alertsN = 1;

  public ALERTS = [
    'El campo magnético de la Tierra es una guía que ayuda a la orientación de muchos animales, y gracias a las brújulas, también al ser humano.',
    'El núcleo de la Tierra está compuesto por un 88% de hierro.',
    'El 10 de julio de 1913, en el Valle de la Muerte de USA, se registraron temperaturas de hasta 56,7 °C.',
    'El 31 de Julio de 1983, en la Antártida, se registraron temperaturas de −89.2 °C.',
    'La Tierra no es totalmente redonda',
    'Un día dura exactamente: 23 horas, 56 minutos y 4 segundos.',
    'Solo se han descubierto 80% de las especies en la Tierra.',
    'Se calcula que la Tierra tiene 5 millones de años de edad.',
    'Gracias a que el 70% de la Tierra es agua, la luz del Sol se refleja tanto y el planeta se percibe como el más brilloso en todo el Sistema Solar.',
    'La Tierra es el único planeta conocido con vida... Por ahora.',
    'Alrededor del 90% de los residuos presentes en los océanos es plástico.',
    'El mundo ha perdido alrededor de 178 millones de hectáreas de bosque entre 1990 y 2020, un área similar al país de Libia.',
    'La ONU alerta que al día se extinguen 150 especies animales.',
    'Las ciudades sólo ocupan el 2% del territorio del planeta, pero son responsables del 70% de las emisiones de gases de efecto invernadero.',
    'La ONU espera que la actual población humana incremente 2.000 millones de personas llegando a ser para 2050 aproximadamente 9.700 millones de personas.',
    'El planeta extrasolar Kepler ese el más similar a la Tierra en tamaño y temperatura de todos los encontrados hasta ahora. Se encuentra a 300 años luz de distancia.'
  ]

  public TYPES = [
    'success',
    'info',
    'warning',
    'primary',
    'secondary',
    'dark'
  ]

  healthNews: any;
  techNews: any;
  scienceNews: any;
  arreglo: string[] = ['salud', 'tec', 'ciencia'];

  //pantalla de carga
  loading = true;

  //para banner
  dayImage: string;
  //para saber qué hora es
  today = new Date();
  time = this.today.getHours();
  //para el color del texto
  text_color = "black";

  weather: any;
  weather3: any;


  //info covid
  covidData: CovidData = null;
  datos = [];

  constructor(private weatherService: WeatherService,
    private covidService: CovidService,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.currentWeather();
    this.infoCovid();
    this.loadMessage();
    this.infoNews();
  }

  async currentWeather() {
    // const {lat, lon} = await this.geolocationService.getPosition();
    // localStorage.setItem('lat', String(lat))
    // localStorage.setItem('lon', String(lon))
    const lat = Number(localStorage.getItem('lat'));
    const lon = Number(localStorage.getItem('lon'));
    console.log('POS', lat, lon);

    this.weather = await this.weatherService.getCurrentWeather(lat, lon);
    console.log('RESP', this.weather);

    this.weather3 = await this.weatherService.getCurrentWeatherByHours(lat, lon, 3);
    console.log('RESP3', this.weather3);

    const dateTime = new Date();

    // Cambiar de zona horaria las proximas horas
    this.weather3.list.forEach( date  => {
      const weatAux = moment(date.dt_txt).subtract( dateTime.getTimezoneOffset(), 'minutes').format('DD MM YYYY hh:mm:ss');
      date.dt_txt = weatAux;
    });

    this.horaDelDia();

    this.loading = false;

    // setTimeout(() => {
    //   this.loading = false;
    //  }, 1000);
  }

  inicializarCovidData(): void {
    this.covidData = {
      country: "",
      todayCases: 0,
      activeCases: 0,
      todayDeaths: 0,
    };
  }

  async infoCovid() {
    this.inicializarCovidData();
    //const lat = Number(localStorage.getItem('lat'));
    //const lon = Number(localStorage.getItem('lon'));
    // let country = this.getCountry(lat, lon);
    let country = "Mexico";
    // this.covidData.country = country;
    // let datos = [];
    this.covidData.country = country;
    //casos totales
    //this.covidData.todayCases = await this.covidService.getTodayCases(country);
    //casos activos
    //this.covidData.activeCases = await this.covidService.getActiveCases(country);
    //muertes de hoy
    //this.covidData.todayDeaths = await this.covidService.getTodayDeaths(country);

    console.log('covidData', this.covidData);
  }

  async infoNews() {
    // let country = localStorage.getItem('countryShort').toLowerCase();
    let country = 'us';


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

    console.log('Health news', this.healthNews);
  }

  horaDelDia() {
    //banner
    if (this.time >= 0 && this.time <= 6) {
      this.text_color = "white";
      this.dayImage = 'night-sky';
    } else if (this.time > 6 && this.time <= 8) {
      this.text_color = "black";
      this.dayImage = 'morning-sky';
    } else if (this.time > 8 && this.time <= 17) {
      this.text_color = "black";
      this.dayImage = 'day-sky';
    } else if (this.time > 17 && this.time <= 19) {
      this.text_color = "black";
      this.dayImage = 'evening-sky';
    } else if (this.time > 19 && this.time <= 23) {
      this.text_color = "white";
      this.dayImage = 'night-sky';
    } else {
      this.text_color = "black";
      this.dayImage = 'day-sky';
    }
  }

  close() {
    this.ALERTS.splice(7, 7);
  }

  async loadMessage() {
    this.typeN = await Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    this.alertsN = await Math.floor(Math.random() * (this.ALERTS.length - 1 + 1)) + 1;
  }

  comprobarSesionIniciada(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      return true;
    }
  }

}
