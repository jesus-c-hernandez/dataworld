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
import { SaludComponent } from './modules/salud/salud.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';

//Pipes
import { NoDataPipe } from './Pipes/no-data/no-data.pipe';
import { RoundPipe } from './Pipes/round/round.pipe';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NosotrosComponent,
    ContactoComponent,
    SaludComponent,
    NoDataPipe,
    RoundPipe,
    SaludComponent,
    NosotrosComponent,
    NoDataPipe,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    AtomSpinnerModule,
    SpringSpinnerModule,
    RadarSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AtomSpinnerModule,
    SpringSpinnerModule,
    RadarSpinnerModule,
    AuthModule
  ]
})
export class AppModule { }
