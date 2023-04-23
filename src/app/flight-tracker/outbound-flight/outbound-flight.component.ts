import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { FlightTrackerService } from '../service/flight-tracker.service';
import { Airline } from '../flight-tracker.model';

@Component({
  selector: 'app-outbound-flight',
  templateUrl: './outbound-flight.component.html',
  styleUrls: ['./outbound-flight.component.scss'],
  providers: [FlightTrackerService],
})
export class OutboundFlightComponent {

  outboundAirlines: Airline[];
  selectedOutboundCode: string;

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private flightTrackerService: FlightTrackerService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.outboundAirlines = this.flightTrackerService.getOutboundAirlines();
    this.selectedOutboundCode = "";
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  onAirlineSelect(airline: string) {
    this.selectedOutboundCode = airline;
  }

}
