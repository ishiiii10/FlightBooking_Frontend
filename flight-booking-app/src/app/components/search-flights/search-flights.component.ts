import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { FlightService, Flight } from '../../services/flight.service';

@Component({
  selector: 'app-search-flights',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {
  form!: FormGroup;

  results: Flight[] = [];

  constructor(private fb: FormBuilder, private flightService: FlightService) {
    this.form = this.fb.group({
      from: [''],
      to: [''],
      depart: ['']
    });
  }

  onSearch() {
    const { from, to, depart } = this.form.value as any;
    this.flightService.searchFlights(from, to, depart).subscribe((res) => (this.results = res));
  }
}
