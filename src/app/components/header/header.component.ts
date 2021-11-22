import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';

import { Constants } from '../../Constants';
import { LogicalFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sesionIniciada: boolean = false;

  countrySelect = null;
  case: number = 3;

  countries: any = [];

  //para esconder el select
  select_pais;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private userService: UserService
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

    console.log('C', this.countries);
    

    // Case 1: Si el usuario esta registrado se debe de seleccionar el pais por defecto.
    // Case 2: El usuario tiene iniciada la sesion y cambia de pais
    // Case 3: El usuario no tiene iniciada la sesion.
    // Case 4: El usuario no ha iniciado sesion y cambia de pais.

    if( !localStorage.getItem('uid') && !localStorage.getItem('case')) { 
      this.case = 3
    } else {
      this.case = Number(localStorage.getItem('case'));
    }

    switch (this.case) {
      case 1:
        console.log('1');

        const user: any = await this.userService.getUser(
          localStorage.getItem('uid')
        );
        this.countrySelect = Constants.countries.find(
          (c) => c.namea2 === user.data.country
        );
        localStorage.setItem('countryShort', user.data.country );
        this.case = 2;
        break;
      case 2:
        console.log('2');
        this.countrySelect = Constants.countries.find(
          (c) => c.namea2 === localStorage.getItem('countryShort')
        );
        localStorage.setItem('countryShort', this.countrySelect.namea2);
        break;
      case 3:
        console.log('3');
        const countryShort: string = weather.sys.country;
        localStorage.setItem(
          'countryShort',
          String(countryShort).toLowerCase()
        );
        console.log('COUNTRY', countryShort);
        
        this.countrySelect = Constants.countries.find(
          (c) => c.namea2 === localStorage.getItem('countryShort')
        );
        this.case = 4;
        break;
      case 4:
        console.log('4');
        this.countrySelect = Constants.countries.find(
          (c) => c.namea2 === localStorage.getItem('countryShort')
        );
        localStorage.setItem('countryShort', this.countrySelect.namea2);
        break;
      default:
        this.countrySelect = Constants.countries.find(
          (c) => c.namea2 === 'mx'
        );
        localStorage.setItem('countryShort', this.countrySelect.namea2);
        break;
    }

    localStorage.setItem('case', String(this.case) )

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
    console.log('Ubicacion', this.countrySelect);
    localStorage.setItem('countryShort', this.countrySelect.namea2);
    location.reload();
  }

  toggleSelect() {
    console.log('hola desde toggleSelect!');

    this.select_pais.classList.toggle('activar-select');
  }

  normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
