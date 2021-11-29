import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

import {ClimaComponent} from 'src/app/modules/clima/clima.component';
// Other imports
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ClimaComponent', () => {
  // let httpClient: HttpClient;
  // let httpTestingController: HttpTestingController;

  

  beforeEach(async () => {
    // Inject the http service and test controller for each test
   let httpClient = TestBed.get(HttpClient);
   let httpTestingController = TestBed.get(HttpTestingController);

    await TestBed.configureTestingModule({
      declarations: [ ClimaComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    let httpClient = TestBed.get(HttpClient);
  let httpTestingController = TestBed.get(HttpTestingController);

    let component: ClimaComponent;
    let fixture: ComponentFixture<ClimaComponent>;

    fixture = TestBed.createComponent(ClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('debe traer datos del clima', async () => {
    let httpClient = TestBed.get(HttpClient);
  let httpTestingController = TestBed.get(HttpTestingController);
  
    let weatherService : WeatherService;
    const climaActual = {
      cord : {
        lon : 25.5445509,
        lat : -103.3319522
      }
    }
    console.log(await weatherService.getCurrentWeather(climaActual.cord.lat, climaActual.cord.lon))
    //expect(weatherService.getCurrentWeather(123456, )).
  });
});
