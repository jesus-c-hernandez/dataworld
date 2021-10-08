import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { ClimaComponent } from './modules/clima/clima.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
