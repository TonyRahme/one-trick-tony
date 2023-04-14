import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';

export interface Flights {
  code: string;
  number: number;
}

@Component({
  selector: 'app-flight-number-list',
  templateUrl: './flight-number-list.component.html',
  styleUrls: ['./flight-number-list.component.scss']
})
export class FlightNumberListComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  flightList: Flights[] = [{code: 'B6', number: 455}, {code: 'TK', number: 82}, {code: 'LH', number: 425}];


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
      this.flightList.push({code: CODE, number: Number(NUMBER)});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(flight: Flights): void {
    const index = this.flightList.indexOf(flight);

    if (index >= 0) {
      this.flightList.splice(index, 1);
    }
  }

  edit(flight: Flights, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove flight if it no longer has a name
    if (!value) {
      this.remove(flight);
      return;
    }

    // Edit existing flight
    const index = this.flightList.indexOf(flight);
    if (index >= 0) {
      this.flightList[index].code = this.getCodeFromString(value);
      this.flightList[index].number = this.getFlightNumberFromString(value);
    }
  }

}
