import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearch } from './search-flights.component';
describe('Search', () => {
  let component: FlightSearch;
  let fixture: ComponentFixture<FlightSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});