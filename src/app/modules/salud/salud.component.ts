import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  CovidService,
  CovidData,
} from 'src/app/core/services/covid/covid.service';
import { SharedService } from 'src/app/core/Shared/shared.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css'],
})
export class SaludComponent implements OnInit {
  public title1: string = 'Ventas';
  public labels1: string[] = [
    'Ventas descargadas',
    'Ventas en tienda',
    'Reporte de ventas',
  ];
  public data1 = [[350, 450, 100]];

  weather: any;
  country: string = '';

  cases: any;
  todayCases: any;
  activeCases: any;
  totalDeaths: any;
  todayDeaths: any;
  recoveredCases: any;
  testTotals: any;
  //pantalla de carga
  loading: boolean = true;
  //para las gráficas
  chart: any;
  //para las estadísticas
  paisesPrincipales: CovidData[] = [];

  @ViewChild('myChart') myChart: ElementRef;

  constructor(
    private covidService: CovidService,
    private sharedService: SharedService,
    private weatherService: WeatherService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.init();
  }

  getCountry() {
    this.country = localStorage.getItem('countryShort');
  }

  async init() {
    this.getCountry();

    /*const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    const myChart = new Chart(
      'myChart',
      {
        type: 'line',
        data: data,
        options: {}
      }
    );*/

    /*
    //casos totales
    this.cases = await this.covidService.getCases(this.country);

    //casos de hoy
    this.todayCases = await this.covidService.getTodayCases(this.country);

    //casos activos
    this.activeCases = await this.covidService.getActiveCases(this.country);

    //muertes totales
    this.totalDeaths = await this.covidService.getTotalDeaths(this.country);

    //muertes de hoy
    this.todayDeaths = await this.covidService.getTodayDeaths(this.country);

    //recuperados
    this.recoveredCases = await this.covidService.getRecoveredCases(this.country);

    //pruebas totales
    this.testTotals = await this.covidService.getTestTotals(this.country);*/

    this.getPaisesPrincipales();

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  async getPaisesPrincipales() {
    let paises_p: string[] = ['USA', 'Mexico', 'Canada'];

    for (let i = 0; i < paises_p.length; i++) {
      let datosPais: CovidData = {
        country: paises_p[i],
        cases: 5,
        todayCases: 6,
        totalDeaths: 7,
      };
      /*
      //casos totales
      this.cases = await this.covidService.getCases(paises_p[i]);

      //casos de hoy
      this.todayCases = await this.covidService.getTodayCases(paises_p[i]);

      //muertes totales
      this.totalDeaths = await this.covidService.getTotalDeaths(paises_p[i]);
      */

      this.paisesPrincipales[i] = datosPais;
    }
  }
}
