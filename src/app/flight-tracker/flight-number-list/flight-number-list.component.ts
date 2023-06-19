import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { FlightNumber } from '../flight-tracker.model';
import { inboundFlights } from '../flight-tracker.config';
import { FlightTrackerService } from '../service/flight-tracker.service';

@Component({
  selector: 'app-flight-number-list',
  templateUrl: './flight-number-list.component.html',
  styleUrls: ['./flight-number-list.component.scss']
})
export class FlightNumberListComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  flightList: FlightNumber[] = inboundFlights;
  constructor(private flightTrackerService: FlightTrackerService){}

  getCodeFromString(value: string):string {
    return value.slice(0,2);
  }
  
  getFlightNumberFromString(value: string):number {
    return Number(value.slice(2));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our flight
    if (value) {
      let CODE = this.getCodeFromString(value);
      let NUMBER = this.getFlightNumberFromString(value);
      this.flightList.push({carrier: CODE, flight: Number(NUMBER)});
    }

    // Clear the input value
    event.chipInput!.clear();

    this.flightTrackerChange();
  }

  remove(flight: FlightNumber): void {
    const index = this.flightList.indexOf(flight);

    if (index >= 0) {
      this.flightList.splice(index, 1);
    }
    this.flightTrackerChange();
  }

  edit(flight: FlightNumber, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove flight if it no longer has a name
    if (!value) {
      this.remove(flight);
      return;
    }

    // Edit existing flight
    const index = this.flightList.indexOf(flight);
    if (index >= 0) {
      this.flightList[index].carrier = this.getCodeFromString(value);
      this.flightList[index].flight = this.getFlightNumberFromString(value);
    }
    this.flightTrackerChange();
  }
/**
 * In case we want to trigger multiple functions for any changes
 * made with edit, add, or remove
 */
  flightTrackerChange() {
    this.onInboundFlightNumbersChange();
  }

  private onInboundFlightNumbersChange(){
    this.flightTrackerService.onInboundFlightNumbersChange(this.flightList);
  }

}
