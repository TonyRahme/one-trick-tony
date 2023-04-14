import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightNumberListComponent } from './flight-number-list.component';

describe('FlightNumberListComponent', () => {
  let component: FlightNumberListComponent;
  let fixture: ComponentFixture<FlightNumberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightNumberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
