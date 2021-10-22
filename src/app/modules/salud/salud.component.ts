import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/core/services/covid/covid.service';
import { SharedService } from 'src/app/core/Shared/shared.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {

  cases: any;
  todayCases: any;
  activeCases: any;
  totalDeaths: any;
  todayDeaths: any;
  recoveredCases: any;
  testTotals: any;
  loading: boolean;

  lati: number;
  long: number;

  constructor(private covidService: CovidService, private sharedService: SharedService) { }

  getCountry(lat: number, lon: number): string{
    const KEY = "AIzaSyC2Xi12hT6sq8i2VZ7QJwuhxk_600N9YE4";
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${KEY}`;
    let country = "";
/*
let paises = [
  'MX' = 'México',
  'US' = 'Estados Unidos',
  'FR' = 'Francia',
  'DE' = 'Alemania',
  'IT' = 'Italia',
  'GB' = 'Reino Unido',
  'BE' = 'Bélgica',
  'NL' = 'Paises Bajos',
  'SE' = 'Suecia',
  'CH' = 'Suiza',
  'AT' = 'Austria',
  'FI' = 'Finlandia',
  'PT' = 'Portugal',
  'TR' = 'Turquía',
  'RU' = 'Rusia',
  'DK' = 'Dinamarca',
  'CA' = 'Cánada',
  'IN' = 'India',
  'GR' = 'Grecia',
  'ES' = 'España',
  'EG' = 'Egipto',
  'AR' = 'Argentina',
  'HU' = 'Hungría',
  'PL' = 'Polonia',
  'RO' = 'Rumania',
  'KR' = 'República de Corea del Norte',
  'CN' = 'China',
  'BR' = 'Brasil',
  'CZ' = 'República Checa',
  'NO' = 'Noruega',
  'ZA' = 'Sudáfrica',
  'AU' = 'Australia',
  'UA' = 'Ucrania',
  'ID' = 'Indonesia',
  'JP' = 'Japon',
  'MA' = 'Marruecos',
  'BG' = 'Bulgaria',
  'CL' = 'Chile',
  'HR' = 'Croacia',
  'RS' = 'Serbia',
  'NG' = 'Nigeria',
  'MY' = 'Malasia',
  'PK' = 'Pakistán',
  'SK' = 'Eslovaquia',
  'PE' = 'Perú',
  'TN' = 'Túnez',
  'SN' = 'Senegal',
  'SI' = 'Eslovenia',
  'PH' = 'Filipinas',
  'GH' = 'Ghana']
*/
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let parts = data.results[0].address_components;

        parts.forEach(part => {
          if (part.types.includes("country")) {
            //we found "country" inside the data.results[0].address_components[x].types array
            country = part.long_name;
          }
        });
    });
      return country;
    }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const {lat, lon } = this.sharedService.getlocation();
    this.lati = lat;
    this.long = lon;
    // let country = this.getCountry(lat, lon);
    let country = "Mexico";
    // this.covidData.country = country;
    this.covidService.getCases(country).subscribe( (resp) => {
      this.cases = resp.data;
    });
    this.covidService.getTodayCases(country).subscribe( (resp) => {
      this.todayCases = resp.data;
    });
    this.covidService.getActiveCases(country).subscribe( (resp) => {
      this.activeCases = resp.data;
    });
    this.covidService.getTotalDeaths(country).subscribe( (resp) => {
      this.totalDeaths = resp.data;
    });
    this.covidService.getTodayDeaths(country).subscribe( (resp) => {
      this.todayDeaths = resp.data;
    });
    this.covidService.getRecoveredCases(country).subscribe( (resp) => {
      this.recoveredCases = resp.data;
    });
    this.covidService.getTestTotals(country).subscribe( (resp) => {
      this.testTotals = resp.data;
    });

    this.loading = false;
  }


}
