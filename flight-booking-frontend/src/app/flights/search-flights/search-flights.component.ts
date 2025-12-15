import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-flights.component.html'
})
export class SearchFlightsComponent {

  searchForm;
  flights: any[] = [];
  allFlights = [
    { flightNumber: 'AI101', source: 'DEL', destination: 'BOM', price: 5000 },
    { flightNumber: 'AI202', source: 'BLR', destination: 'DEL', price: 4500 },
    { flightNumber: 'AI303', source: 'DEL', destination: 'BLR', price: 4800 }
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      source: [''],
      destination: ['']
    });
  }

  searchFlights() {
    const { source, destination } = this.searchForm.value;

    this.flights = this.allFlights.filter(f =>
      (!source || f.source === source) &&
      (!destination || f.destination === destination)
    );
  }
}