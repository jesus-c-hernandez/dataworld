import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sesionIniciada : boolean = false;
  //formulario

  countries : string[] = [
    'México', 'Estados Unidos', 'Francia', 'Alemania', 'Italia', 'Reino Unido', 'Bélgica', 'Paises Bajos', 'Suecia', 'Suiza', 'Austria', 'Finlandia', 'Portugal', 'Turquía', 'Rusia', 'Dinamarca', 'Cánada', 'India', 'Grecia', 'España', 'Egipto', 'Argentina', 'Hungría', 'Polonia', 'Rumania', 'República de Corea del Norte', 'China', 'Brasil', 'República Checa', 'Noruega', 'Sudáfrica', 'Australia', 'Ucrania', 'Indonesia', 'Japon', 'Marruecos', 'Bulgaria', 'Chile', 'Croacia', 'Serbia', 'Nigeria', 'Malasia', 'Pakistán', 'Eslovaquia', 'Perú', 'Túnez', 'Senegal', 'Eslovenia', 'Filipinas', 'Ghana'
  ];
  countriesValues : string[] = [
    'Mexico', 'USA', 'France', 'Germany','Italy','UK','Belgium','Netherlands','Sweden','Switzerland','Austria','Finland','Portugal','Turkey','Russia','Denmark','Canada','India','Greece','Spain','Egypt','Argentina','Hungary','Polonia','Poland',
      //'North Korea','China','Brazil',
    'Czech Republic','Norway','South Africa','Australia','Ukraine','Indonesia','Japan','Morocco','Bulgaria','Chile','Croatia','Serbia','Nigeria','Malasia','Pakistan','Slovakia','Peru','Tunisia','Senegal','Slovenia','Philippines','Ghana'
  ];

  constructor(private geolocationService : GeolocationService,
              private weatherService : WeatherService,
              private userService: UserService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const {lat, lon} = await this.geolocationService.getPosition();
    localStorage.setItem('lat', String(lat))
    localStorage.setItem('lon', String(lon))
    
    const weather = await this.weatherService.getCurrentWeather(lat, lon);
    const countryShort: string = weather.sys.country;
    localStorage.setItem('countryShort', String(countryShort));
    console.log('countryShort', countryShort);
  }

  comprobarSesionIniciada(): boolean{
    if(!localStorage.getItem('token')){
      this.sesionIniciada = false;
    } else {
      this.sesionIniciada = true;
    }
    return this.sesionIniciada;
  }

  cerrarSesion(){
    this.userService.logout();
  }

  cambiarUbicacion(event){
    console.log('Este es el país', event.target.data);
    
    // Pasamos el valor seleccionado a la variable verSeleccion
    //this.verSeleccion = this.opcionSeleccionado;
    //console.log(this.verSeleccion);
    //let country = document.getElementById('p');
    //console.log(country);
    // localStorage.setItem('country', String(country));
    /*let paises = new Map([
      ['MX','Mexico'],
      ['US', 'USA'],
      ['FR', 'France'],
      ['DE', 'Germany'],
      ['IT', 'Italy'],
      ['GB', 'UK'],
      ['BE', 'Belgium'],
      ['NL', 'Netherlands'],
      ['SE', 'Sweden'],
      ['CH', 'Switzerland'],
      ['AT', 'Austria'],
      ['FI', 'Finland'],
      ['PT', 'Portugal'],
      ['TR', 'Turkey'],
      ['RU', 'Russia'],
      ['DK', 'Denmark'],
      ['CA', 'Canada'],
      ['IN', 'India'],
      ['GR', 'Greece'],
      ['ES', 'Spain'],
      ['EG', 'Egypt'],
      ['AR', 'Argentina'],
      ['HU', 'Hungary'],
      ['PL', 'Polonia'],
      ['RO', 'Poland'],
      //['KR', 'North Korea'],
      ['CN', 'China'],
      ['BR', 'Brazil'],
      // ['CZ', 'Czech Republic'],
      ['NO', 'Norway'],
      // ['ZA', 'South Africa'],
      ['AU', 'Australia'],
      ['UA', 'Ukraine'],
      ['ID', 'Indonesia'],
      ['JP', 'Japan'],
      ['MA', 'Morocco'],
      ['BG', 'Bulgaria'],
      ['CL', 'Chile'],
      ['HR', 'Croatia'],
      ['RS', 'Serbia'],
      ['NG', 'Nigeria'],
      ['MY', 'Malasia'],
      ['PK', 'Pakistan'],
      ['SK', 'Slovakia'],
      ['PE', 'Peru'],
      ['TN', 'Tunisia'],
      ['SN', 'Senegal'],
      ['SI', 'Slovenia'],
      ['PH', 'Philippines'],
      ['GH', 'Ghana']
  ]);*/

  }

  normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

}
