import { Routes } from '@angular/router';
import { Login } from './auth/login/login.component';
import { Register } from './auth/register/register.component';
import { FlightSearch } from './flights/search-flights/search-flights.component';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'search', component: FlightSearch },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];