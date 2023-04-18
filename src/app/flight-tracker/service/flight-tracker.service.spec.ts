import { TestBed } from '@angular/core/testing';

import { FlightTrackerService } from './flight-tracker.service';

describe('FlightTrackerService', () => {
  let service: FlightTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
