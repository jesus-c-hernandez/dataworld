import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Constants } from '../../Constants';
import { LogicalFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import { CityService } from 'src/app/core/services/city/city.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sesionIniciada: boolean = false;

  countrySelect = null;
  citySelect = null;
  case: number = 3;

  countries: any = [];
  cities: any = [];

  Constants: any = Constants;

  //para esconder el select
  select_pais;

  user: any;
  reset: number = 0;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private userService: UserService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    const { lat, lon } = await this.geolocationService.getPosition();
    localStorage.setItem('lat', String(lat));
    localStorage.setItem('lon', String(lon));

    const weather = await this.weatherService.getCurrentWeather(lat, lon);

    console.log('WEAT', weather);
    

    this.countries = Constants.countries;
    this.cities = await this.cityService.getCities();

    console.log('C', this.countries);

    this.reset = localStorage.getItem('reset') ? Number(localStorage.getItem('reset')) : 0;
    
    if( this.reset != 0 ) {
      if( localStorage.getItem('uid') ){
        this.user = await this.userService.getUser( localStorage.getItem('uid') );
        this.countrySelect = Constants.countries.find( c => c.namea2 === this.user.data.country);
        localStorage.setItem('countryShort', this.user.data.country);
        console.log(this.countrySelect);
      } else {
        this.countrySelect = Constants.countries.find( c => c.namea2 === 'mx' );
      }
    } else {
      this.citySelect = this.cities.find( c => c.id === localStorage.getItem('city') );
      this.countrySelect = Constants.countries.find( c => c.namea2 === localStorage.getItem('countryShort') );

      console.log('CITY', this.citySelect);

    }

    // if( localStorage.getItem('uid')){
    //   const user: any = await this.userService.getUser(localStorage.getItem('uid'));

    //   if (localStorage.getItem('countryShort') === user.data.country){
    //     this.countrySelect = Constants.countries.find( c => c.namea2 === user.data.country);

    //     localStorage.setItem('countryShort', user.data.country);
    //     console.log(this.countrySelect);

    //   } else {
    //     this.countrySelect = Constants.countries.find( c => c.namea2 === localStorage.getItem('countryShort'))
    //     localStorage.setItem('countryShort', this.countrySelect.nama2);
    //   }
    // } else {
    //   const countryShort: string = weather.sys.country;
    //   localStorage.setItem('countryShort', String(countryShort).toLowerCase());
    //   this.countrySelect = Constants.countries.find( c => c.namea2 === localStorage.getItem('countryShort'))
    // }

    this.select_pais = document.getElementById('select_pais');
  }

  comprobarSesionIniciada(): boolean {
    if (!localStorage.getItem('token')) {
      this.sesionIniciada = false;
    } else {
      this.sesionIniciada = true;
    }
    return this.sesionIniciada;
  }

  cerrarSesion() {
    this.userService.logout();
  }

  chooseCountry() {
    localStorage.setItem('reset', '0');
    localStorage.setItem('countryShort', this.countrySelect.namea2);
    localStorage.removeItem('city');
    location.reload();
  }

  chooseCity() {
    localStorage.setItem('reset', '0');
    localStorage.setItem('countryShort', this.citySelect.country.toLowerCase());
    localStorage.setItem('city', this.citySelect.id);
    location.reload();
  }

  toggleSelect() {
    this.select_pais.classList.toggle('activar-select');
  }

  normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  async resetear() {
    localStorage.setItem('reset', '1');
    if( localStorage.getItem('uid') ) {
      this.user = await this.userService.getUser( localStorage.getItem('uid') );
      localStorage.setItem('countryShort', this.user.data.country);
    } else {
      localStorage.setItem('countryShort', 'mx');
    }
    localStorage.removeItem('city');
    location.reload();
  }
}
