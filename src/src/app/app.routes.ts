import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { MainComponent } from './main/main.component';
import { Top10Component } from './top10/top10.component';
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'sigup', component: SigupComponent},
    {path: '', component: MainComponent},
    {path: 'top10', component: Top10Component},
    {path: 'main', component: MainComponent},
    {path: 'login/id', component: LoginComponent},
];