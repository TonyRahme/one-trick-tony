import { EventEmitter, Injectable } from '@angular/core';
import { FlightStatusDTO, FlightNumber, Airline } from '../flight-tracker.model';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { outboundAirlines, days, month, inboundFlights } from '../flight-tracker.config';


@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {

//TODO: Create a separate GSheet Service
private GSHEET_API_KEY = "1023649352919-739leevkir0rl4gd6cuj3a7lnrle9kpj.apps.googleusercontent.com";

private ID_FLIGHT_STATS_API = "b2779c7d";
private KEY_FLIGHT_STATS_API = "b0c9e85d16976280d4a2fb57ed697525";
private baseURL = "/flex/flightstatus/rest/";
private apiKeyIdURL = `?appId=${this.ID_FLIGHT_STATS_API}&appKey=${this.KEY_FLIGHT_STATS_API}`;

//Might be deprecated
private months: typeof month;
private days: number[];

//airlines
private outboundAirlines: Airline[];
private outboundFlights: FlightNumber[];
private inboundFlights: FlightNumber[];

//Emitters
outboundFlightChanged = new EventEmitter<FlightNumber>();

  constructor(private http: HttpClient) {
    this.days = days;
    this.outboundAirlines = outboundAirlines.slice();
    this.inboundFlights = inboundFlights.slice();
  }

  getMonth(value: number) {
    return this.months[this.evaluateNumericalMonth(value)];
  }

  onFlightNumberChange(flightNumber: FlightNumber){
    this.outboundFlightChanged.emit(flightNumber);
  }

  getOutboundAirlines(): Airline[] {
    return this.outboundAirlines.slice();
  }
  
  /**
   * TEST: retrieve latest flight status of airline and flight number
   * @param flightNumber 
   */
  getFlightStatus(flightNumber: FlightNumber) {
    let date = new Date();
    let flightStatusURL = `v2/json/flight/tracks/${flightNumber.carrier}/${flightNumber.flight}/dep/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    this.http.get(`${this.baseURL}${flightStatusURL}${this.apiKeyIdURL}`).pipe(take(1)).subscribe(value => {
      console.log(value);
    })
  }

  /**
   * HELPER FUNCTIONS
   */

  private evaluateNumericalMonth(value: number): number {
    if(value < 1){
      return 1;
    }
    if (value > 12){
      value %= 12;
      return value === 0 ? 12 : value;
    }
    return value;
  }

}
