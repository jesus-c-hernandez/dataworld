
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ClimaComponent } from "./modules/clima/clima.component";
import { CrimenComponent } from "./modules/crimen/crimen.component";
import { SaludComponent } from "./modules/salud/salud.component";
import { NosotrosComponent } from "./modules/nosotros/nosotros.component";
import { ContactoComponent } from "./modules/contacto/contacto.component";


const APP_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'clima', component: ClimaComponent },
    { path: 'crimen', component: CrimenComponent },
    { path: 'salud', component: SaludComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });