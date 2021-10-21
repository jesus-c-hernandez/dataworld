import { Component, OnInit } from '@angular/core';
import { CovidService, CovidData } from 'src/app/core/services/covid/covid.service';
import { SharedService } from 'src/app/core/Shared/shared.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {

  covidData : CovidData = null;
  datos = [];
  loading = true;

  constructor(private covidService: CovidService, private sharedService: SharedService) { }

  getCountry(lat: number, lon: number): string{
    const KEY = "AIzaSyC2Xi12hT6sq8i2VZ7QJwuhxk_600N9YE4";
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${KEY}`;
    let country = "";

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

  inicializarCovidData(): void{
    this.covidData = {
      country : "",
      cases : 0,
      todayCases: 0,
      activeCases : 0,
      totalDeaths : 0,
      todayDeaths : 0,
      recoveredCases : 0,
      testTotals : 0
    };
  }

  init() {
    this.inicializarCovidData();
    let peticiones: string[] = [
                                  "today-cases",
                                  "active-cases",
                                  "today-deaths",
                                  "cases", 
                                  "recovered-cases",
                                  "total-deaths",
                                  "test-totals"];
    const {lat, lon } = this.sharedService.getlocation();
    // let country = this.getCountry(lat, lon);
    let country = "Mexico";
    // this.covidData.country = country;
    // let datos = [];
    for(let i = 0; i < peticiones.length; i++){
      this.covidService.getCovidData(country, peticiones[i]).subscribe( (resp) => {
      // console.log(`${peticiones[i]}`, resp);
      this.datos[i] = resp.data[0].data;
      
      // console.log('CovidData', resp.data[0].data); 
      });
    }
    // console.log('datos', this.datos);
    // this.covidData.cases = this.datos[0];
    // console.log('cases', this.datos[0]);
    // this.covidData.todayCases = this.datos[1];
    // this.covidData.activeCases = this.datos[2];
    // this.covidData.totalDeaths = this.datos[3];
    // this.covidData.todayDeaths = this.datos[4];
    // this.covidData.recoveredCases = this.datos[5];
    // this.covidData.testTotals = this.datos[6];

    console.log('covidData', this.covidData);

    setTimeout(() => {
      this.loading = false;
     }, 2000);
  }


}
