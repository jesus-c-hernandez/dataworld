import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CovidService } from 'src/app/core/services/covid/covid.service';
import { SharedService } from 'src/app/core/Shared/shared.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {

  weather: any;
  country: string = "";

  cases: any;
  todayCases: any;
  activeCases: any;
  totalDeaths: any;
  todayDeaths: any;
  recoveredCases: any;
  testTotals: any;
  //pantalla de carga
  loading: boolean = true;

  lati: number;
  long: number;

  chart : any;
  @ViewChild("myChart") myChart: ElementRef;

  constructor(private covidService: CovidService, 
              private sharedService: SharedService, 
              private weatherService: WeatherService,
              private elementRef: ElementRef,
              private renderer: Renderer2) { }

  getCountry(lat: number, lon: number){
    this.weatherService.getCurrentWeather(lat, lon).subscribe( (resp) => {
      this.weather = resp.data;
      console.log('Este es el weather de salud', this.weather);
    });
    setTimeout(() => {     
      let shortcut: string = this.weather.sys.country;
      console.log('este es el shortcut',shortcut);

      let paises = new Map([
        ['MX','México'],
        ['US', 'Estados Unidos'],
        ['FR', 'Francia'],
        ['DE', 'Alemania'],
        ['IT', 'Italia'],
        ['GB', 'Reino Unido'],
        ['BE', 'Bélgica'],
        ['NL', 'Paises Bajos'],
        ['SE', 'Suecia'],
        ['CH', 'Suiza'],
        ['AT', 'Austria'],
        ['FI', 'Finlandia'],
        ['PT', 'Portugal'],
        ['TR', 'Turquía'],
        ['RU', 'Rusia'],
        ['DK', 'Dinamarca'],
        ['CA', 'Cánada'],
        ['IN', 'India'],
        ['GR', 'Grecia'],
        ['ES', 'España'],
        ['EG', 'Egipto'],
        ['AR', 'Argentina'],
        ['HU', 'Hungría'],
        ['PL', 'Polonia'],
        ['RO', 'Rumania'],
        ['KR', 'República de Corea del Norte'],
        ['CN', 'China'],
        ['BR', 'Brasil'],
        ['CZ', 'República Checa'],
        ['NO', 'Noruega'],
        ['ZA', 'Sudáfrica'],
        ['AU', 'Australia'],
        ['UA', 'Ucrania'],
        ['ID', 'Indonesia'],
        ['JP', 'Japon'],
        ['MA', 'Marruecos'],
        ['BG', 'Bulgaria'],
        ['CL', 'Chile'],
        ['HR', 'Croacia'],
        ['RS', 'Serbia'],
        ['NG', 'Nigeria'],
        ['MY', 'Malasia'],
        ['PK', 'Pakistán'],
        ['SK', 'Eslovaquia'],
        ['PE', 'Perú'],
        ['TN', 'Túnez'],
        ['SN', 'Senegal'],
        ['SI', 'Eslovenia'],
        ['PH', 'Filipinas'],
        ['GH', 'Ghana']
      ]);
      
      if(paises.has(shortcut)){
        this.country = paises.get(shortcut);
      }
    }, 2000);
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const {lat, lon } = this.sharedService.getlocation();
    this.lati = lat;
    this.long = lon;
    this.getCountry(lat, lon);
    //let country = "Mexico";
    // this.covidData.country = country;
    /*this.covidService.getCases(this.country).subscribe( (resp) => {
      this.cases = resp.data;
    });
    this.covidService.getTodayCases(this.country).subscribe( (resp) => {
      this.todayCases = resp.data;
    });
    this.covidService.getActiveCases(this.country).subscribe( (resp) => {
      this.activeCases = resp.data;
    });
    this.covidService.getTotalDeaths(this.country).subscribe( (resp) => {
      this.totalDeaths = resp.data;
    });
    this.covidService.getTodayDeaths(this.country).subscribe( (resp) => {
      this.todayDeaths = resp.data;
    });
    this.covidService.getRecoveredCases(this.country).subscribe( (resp) => {
      this.recoveredCases = resp.data;
    });
    this.covidService.getTestTotals(this.country).subscribe( (resp) => {
      this.testTotals = resp.data;
    });*/

    

    setTimeout(() => {
      this.loading = false;
     }, 2000);
  }

  ngAfterViewInit(): void{
    const dias = ['Lunes', 'Martes', 'Miércoles'];
    const datos = ['Morado', 'Rojo', 'Amarillo'];

    const data = {
      labels: dias,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: ['Morado', 'Rojo', 'Amarillo'],
      }]
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    //const canvas = this.elementRef.nativeElement.querySelector('#divchart');
    const canvas = this.myChart.nativeElement().getContext();
    console.log('Este es el canvas',canvas);
    
      this.chart = new Chart(
        canvas,
        {
          type: 'line',
          data: data,
          options: {}
        }
      );
  }
}