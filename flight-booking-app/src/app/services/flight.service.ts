import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface Flight {
  id: string;
  airline: string;
  from: string;
  to: string;
  depart: string;
  price: number;
}

const MOCK_FLIGHTS: Flight[] = [
  { id: 'F001', airline: 'Airline A', from: 'NYC', to: 'LAX', depart: '2025-12-20', price: 199 },
  { id: 'F002', airline: 'Airline B', from: 'NYC', to: 'LAX', depart: '2025-12-20', price: 249 },
  { id: 'F003', airline: 'Airline C', from: 'SFO', to: 'NYC', depart: '2025-12-21', price: 299 },
  { id: 'F004', airline: 'Airline D', from: 'LAX', to: 'SFO', depart: '2025-12-22', price: 99 }
];

@Injectable({ providedIn: 'root' })
export class FlightService {
  // Toggle to call real backend (example only). By default we use mock data.
  useBackend = false;
  backendBaseUrl = ''; // set to your API base URL if useBackend=true

  constructor() {}

  searchFlights(from?: string, to?: string, depart?: string): Observable<Flight[]> {
    if (this.useBackend && this.backendBaseUrl) {
      // Example placeholder for real backend call; leave as TODO if needed.
      // return from(fetch(`${this.backendBaseUrl}/flights?from=${from}&to=${to}&depart=${depart}`).then(r=>r.json()));
    }

    const results = MOCK_FLIGHTS.filter((f) => {
      if (from && f.from.toLowerCase() !== from.toLowerCase()) return false;
      if (to && f.to.toLowerCase() !== to.toLowerCase()) return false;
      if (depart && f.depart !== depart) return false;
      return true;
    });

    return of(results);
  }

  register(user: { fullName: string; email: string; password: string }): Observable<{ success: boolean; message?: string }> {
    // simulate registration
    return of({ success: true, message: 'Registered (mock)' });
  }

  login(credentials: { email: string; password: string }): Observable<{ success: boolean; token?: string }> {
    // simulate login
    return of({ success: true, token: 'mock-token-123' });
  }
}
