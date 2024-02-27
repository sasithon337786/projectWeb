import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { MainComponent } from './main/main.component';
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'sigup', component: SigupComponent},
    {path: 'main', component: MainComponent}
];