import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { SaludComponent } from './modules/salud/salud.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { ContactoComponent } from './modules/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CrimenComponent,
    SaludComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
