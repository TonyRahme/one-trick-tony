import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundFlightComponent } from './outbound-flight.component';

describe('OutboundFlightComponent', () => {
  let component: OutboundFlightComponent;
  let fixture: ComponentFixture<OutboundFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboundFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboundFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
