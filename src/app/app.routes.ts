
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ClimaComponent } from "./modules/clima/clima.component";

const APP_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'clima', component: ClimaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });