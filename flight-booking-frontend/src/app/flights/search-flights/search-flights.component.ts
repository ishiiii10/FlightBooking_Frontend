import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-flights.component.html'
})
export class SearchFlightsComponent {
  flights = [
    { flightNumber: 'AI101', source: 'DEL', destination: 'BOM', price: 5000 },
    { flightNumber: 'AI202', source: 'BLR', destination: 'DEL', price: 4500 }
  ];
}