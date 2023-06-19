import { EventEmitter, Injectable } from '@angular/core';
import { FlightStatusDTO, FlightNumber, Airline, AirTime } from '../flight-tracker.model';
import { outboundAirlines, inboundFlights, 
  TK_82_2023_04_23, 
  BOS_FLIGHTSTATUS_MAP_2023_04_24_ALL, 
  
} from '../flight-tracker.config';


@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {

//airlines
private outboundAirlines: Airline[];
private outboundFlights: FlightNumber[];
private inboundFlights: FlightNumber[];
private arrivalFlights: [string, FlightStatusDTO][];

//Emitters
outboundFlightChanged = new EventEmitter<FlightNumber>();
inboundFlightsChanged = new EventEmitter<FlightNumber[]>();

  constructor() {
    this.arrivalFlights = Array.from(BOS_FLIGHTSTATUS_MAP_2023_04_24_ALL)
    this.outboundAirlines = outboundAirlines.slice();
    this.inboundFlights = inboundFlights.slice();
  }

  getOutboundAirlines(): Airline[] {
    return this.outboundAirlines.slice();
  }

  getInboundFlights(): FlightNumber[] {
    return this.inboundFlights;
  }
    
  onOutboundFlightNumberChange(flightNumber: FlightNumber){
    this.outboundFlightChanged.emit(flightNumber);
  }

  onInboundFlightNumbersChange(flightNumberList: FlightNumber[]) {
    this.inboundFlightsChanged.emit(flightNumberList);
  }
  
  /**
   * TEST: retrieve latest flight status of airline and flight number
   * @param flightNumber 
   */
  getDepartingFlightStatus(flightNumber: FlightNumber): FlightStatusDTO {
    let flightStatus: FlightStatusDTO = TK_82_2023_04_23.flightStatuses[0];
    return flightStatus;
    /* let date = new Date();
    let flightStatusURL = `v2/json/flight/tracks/${flightNumber.carrier}/${flightNumber.flight}/dep/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    this.http.get(`${this.baseURL}${flightStatusURL}${this.apiKeyIdURL}`)
      .pipe(take(1)).subscribe((value) => {
        flighStatus = value.flightStatuses;
    }) */
  }

  getArrivingFlightStatuses(flightNumberList?: FlightNumber[]): Map<string, FlightStatusDTO> {
    if(!flightNumberList?.length){
      return BOS_FLIGHTSTATUS_MAP_2023_04_24_ALL;
    }
    return new Map(flightNumberList.filter( (fn) => BOS_FLIGHTSTATUS_MAP_2023_04_24_ALL.has(`${fn.carrier}${fn.flight}`)).map(fs => {
      let fsCode = `${fs.carrier}${fs.flight}`;
      let fsValue = BOS_FLIGHTSTATUS_MAP_2023_04_24_ALL.get(fsCode);
      return fsValue ? [fsCode, fsValue] : undefined ;
    }));
  }

  getNumberOfArrivingFlightsByAirlines(inbFlights: FlightNumber[]): Map<string,number> {
    const flightsMap: Map<string, number> = new Map<string, number>();

    this.arrivalFlights.forEach(([id, flight]) => {
      if(inbFlights.some(fn => fn.carrier === flight.carrierFsCode)) {
        flightsMap.has(flight.carrierFsCode) ? flightsMap.set(flight.carrierFsCode, flightsMap.get(flight.carrierFsCode)+1) : flightsMap.set(flight.carrierFsCode, 1);
      }
    });
    return flightsMap;
  }

  getDelayByAirlines() {
    let airTimeMins: Map<string, AirTime[]> = new Map();
    this.arrivalFlights.forEach(([id, fs]) => {
      if(fs.flightDurations?.scheduledAirMinutes && fs.operationalTimes?.estimatedGateArrival){
        let minArray: any[] = [];
        if(airTimeMins.has(fs.carrierFsCode)) {
          minArray = airTimeMins.get(fs.carrierFsCode);
        }
        minArray.push(
          {
            flightNumber: id,
            airTime: fs.flightDurations?.scheduledAirMinutes,
            arrivalTime: new Date(fs.operationalTimes.estimatedGateArrival.dateLocal),
          });
        airTimeMins.set(fs.carrierFsCode, minArray);
      }
    })

    return airTimeMins;
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
