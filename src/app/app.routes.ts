
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ClimaComponent } from "./modules/clima/clima.component";
import { NoticiasComponent } from "./modules/noticias/noticias.component";
import { SaludComponent } from "./modules/salud/salud.component";
import { NosotrosComponent } from "./modules/nosotros/nosotros.component";
import { ContactoComponent } from "./modules/contacto/contacto.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";


const APP_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'clima', component: ClimaComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'salud', component: SaludComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'login', component: LoginComponent }, 
    { path: 'register', component: RegisterComponent },    
    // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });