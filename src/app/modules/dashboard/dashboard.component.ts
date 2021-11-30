import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import {
  CovidService,
  CovidData,
} from 'src/app/core/services/covid/covid.service';
import { NewsService } from 'src/app/core/services/news/news.service';
import { UserService } from 'src/app/core/services/user/user.service';

// import moment from 'moment';
// const moment = require('moment'); // require
import * as moment from 'moment';
import * as dayjs from 'dayjs';

import { Constants } from '../../Constants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
    'El planeta extrasolar Kepler ese el más similar a la Tierra en tamaño y temperatura de todos los encontrados hasta ahora. Se encuentra a 300 años luz de distancia.',
  ];

  public TYPES = ['success', 'info', 'warning', 'primary', 'secondary', 'dark'];

  healthNews: any;
  techNews: any;
  scienceNews: any;
  arreglo: string[] = ['salud', 'tec', 'ciencia'];

  //pantalla de carga
  loading = true;

  //para banner
  dayImage: string;
  //para iconos de noche
  esDeNoche: boolean = false;
  isNight: string = '';
  //para saber qué hora es
  today = new Date();
  time: any;
  //para el color del texto
  text_color = 'black';

  weather: any;
  weather3: any;
  weather5: any;

  user: any = null;

  lat: number;
  lon: number;

  timeZoneValue: number;

  // Covid
  todayCases: any
  activeCases: any;
  todayDeaths: any;

  countrySelected: any;

  Constanst: any = Constants;

  //info covid
  covidData: CovidData = null;
  datos = [];

  constructor(
    private weatherService: WeatherService,
    private covidService: CovidService,
    private newsService: NewsService,
    private userService: UserService
  ) {}

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

    if (localStorage.getItem('uid')) {
      this.user = await this.userService.getUser(localStorage.getItem('uid'));
      console.log('USER', this.user);

      if (localStorage.getItem('countryShort') != this.user.data.country) {
        console.log('DIFF');
        const country = Constants.countries.find(
          (c) => c.namea2 === localStorage.getItem('countryShort')
        );
        console.log('C', country);
        this.lat = Number(country.lat);
        this.lon = Number(country.lon);
      } else {
        this.lat = Number(localStorage.getItem('lat'));
        this.lon = Number(localStorage.getItem('lon'));
      }
    } else if( localStorage.getItem('countryShort') ) {
      const country = Constants.countries.find(
        (c) => c.namea2 === localStorage.getItem('countryShort')
      );
      console.log('C', country);
      this.lat = Number(country.lat);
      this.lon = Number(country.lon);
    } else {
      this.lat = Number(localStorage.getItem('lat'));
      this.lon = Number(localStorage.getItem('lon'));
    }

    console.log('POS', this.lat, this.lon);

    this.weather = await this.weatherService.getCurrentWeather(
      this.lat,
      this.lon
    );
    console.log('RESP', this.weather);

    const hours = (this.weather.timezone / 60)/60;
    this.time = Number(moment.unix(this.weather.dt).utc().format('HH')) + Number(hours);
    console.log('H', hours);
    console.log(Number(moment.unix(this.weather.dt).utc().format('HH')));
    if ( this.time < 0 ){ this.time *= -1 }
    
    console.log('TIME', this.time);

    await this.horaDelDia();

    this.weather3 = await this.weatherService.getCurrentWeatherByHours(
      this.lat,
      this.lon,
      3
    );

    this.weather5 = await this.weatherService.getNextDays(
      this.lat,
      this.lon,
      5
    );
    console.log('RESP3', this.weather3);
    console.log('RESP5', this.weather5);

    this.timeZoneValue = this.weather.timezone / 60;

    console.log('TZ', this.timeZoneValue);

    const dateTime = new Date();

    console.log('DT', dateTime.getTimezoneOffset());

    // Cambiar de zona horaria las proximas horas
    this.weather3.list.forEach((date) => {
      const weatAux = moment(date.dt_txt)
        .add(this.timeZoneValue, 'minutes')
        .format('YYYY MM DD HH:mm:ss');
      date.dt_txt = weatAux;
    });

    this.weather5.list.forEach((date) => {
      const auxDate = dayjs(date.dt * 1000).format('YYYY MM DD HH:mm:ss');
      const dayOfWeek = this.numberToDay( new Date(auxDate).getDay() );
      console.log('DOW', dayOfWeek);
      date.day = dayOfWeek;
    });

    console.log('RESP52', this.weather5);


    console.log('WEA', this.weather3);
  }

  numberToDay(day) {
    switch (day) {
      case 0: return 'Domingo'
        break;
      case 1: return 'Lunes'
        break;
      case 2: return 'Martes'
        break;
      case 3: return 'Miercoles'
        break;
      case 4: return 'Jueves'
        break;
      case 5: return 'Viernes'
        break;
      case 6: return 'Sabado'
        break;
      default: return 'Domingo'
        break;
    }
  }

  async infoCovid() {
    this.countrySelected = Constants.countries.find(
      (c) => c.namea2 === localStorage.getItem('countryShort') )

    // casos de hoy
    this.todayCases = await this.covidService.getTodayCases( this.countrySelected.code );
    // casos activos
    this.activeCases = await this.covidService.getActiveCases( this.countrySelected.code );
    // muertes de hoy
    this.todayDeaths = await this.covidService.getTodayDeaths( this.countrySelected.code );
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

    // this.loading = false;

    console.log('Health news', this.healthNews);
    this.loading = false;
  }

  horaDelDia() {

    console.log('Hora del dia');
    console.log(this.time);
    
    
    //banner
    if (this.time >= 0 && this.time <= 6) {
      this.text_color = 'white';
      this.dayImage = 'night-sky';
      this.esDeNoche = true;
    } else if (this.time > 6 && this.time <= 8) {
      this.text_color = 'black';
      this.dayImage = 'morning-sky';
      this.esDeNoche = false;
    } else if (this.time > 8 && this.time <= 17) {
      this.text_color = 'black';
      this.dayImage = 'day-sky';
      this.esDeNoche = false;
    } else if (this.time > 17 && this.time <= 19) {
      this.text_color = 'black';
      this.dayImage = 'evening-sky';
      this.esDeNoche = false;
    } else if (this.time > 19 && this.time <= 23) {
      this.text_color = 'white';
      this.dayImage = 'night-sky';
      this.esDeNoche = true;
    } else {
      this.text_color = 'black';
      this.dayImage = 'day-sky';
      this.esDeNoche = false;
    }
  }

  close() {
    this.ALERTS.splice(7, 7);
  }

  async loadMessage() {
    this.typeN = (await Math.floor(Math.random() * (6 - 1 + 1))) + 1;
    this.alertsN =
      (await Math.floor(Math.random() * (this.ALERTS.length - 1 + 1))) + 1;
  }

  comprobarSesionIniciada(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      return true;
    }
  }
}
