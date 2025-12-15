import { Routes } from '@angular/router';
import { Login } from './auth/login/login.component';
import { Register } from './auth/register/register.component';
import { FlightSearch } from './flights/search-flights/search-flights.component';

export const routes: Routes = [
  // Public home page with flight search
  { path: '', component: FlightSearch },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  // Optional explicit search route
  { path: 'search', component: FlightSearch }
];