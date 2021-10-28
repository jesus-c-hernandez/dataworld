import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AtomSpinnerModule, RadarSpinnerModule, SpringSpinnerModule} from 'angular-epic-spinners'

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { ClimaComponent } from './modules/clima/clima.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CrimenComponent } from './modules/crimen/crimen.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactoComponent } from './modules/contacto/contacto.component';

//Pipes
import { NoDataPipe } from './Pipes/no-data/no-data.pipe';
import { RoundPipe } from './Pipes/round/round.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphicComponent } from './components/graphic/graphic.component';
import { SaludComponent } from './modules/salud/salud.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CrimenComponent,
    NosotrosComponent,
    ContactoComponent,
    GraphicComponent,
    SaludComponent,
    NoDataPipe,
    RoundPipe,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    AtomSpinnerModule,
    SpringSpinnerModule,
    RadarSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AtomSpinnerModule,
    SpringSpinnerModule,
    RadarSpinnerModule
  ]
})
export class AppModule { }
