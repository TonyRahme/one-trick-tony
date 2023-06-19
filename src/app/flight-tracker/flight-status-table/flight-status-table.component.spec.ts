import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatusTableComponent } from './flight-status-table.component';

describe('FlightStatusTableComponent', () => {
  let component: FlightStatusTableComponent;
  let fixture: ComponentFixture<FlightStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightStatusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
