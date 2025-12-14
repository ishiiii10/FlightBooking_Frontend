import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'search', pathMatch: 'full' },
	{
		path: 'register',
		loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
	},
	{
		path: 'login',
		loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
	},
	{
		path: 'search',
		loadComponent: () => import('./components/search-flights/search-flights.component').then(m => m.SearchFlightsComponent)
	},
	{ path: '**', redirectTo: 'search' }
];
