import { Component } from '@angular/core';
import { FlightNumber, FlightStatus } from '../flight-tracker.model';
import { FlightTrackerService } from '../service/flight-tracker.service';
import { get } from 'cheerio/lib/api/traversing';


const FLIGHT_DATA: FlightStatus[] = [
  {flightNumber: 'TK 82', arrivalTime: new Date('2023-04-24T00:00:00'), status: 'Landed', departureAirport: 'IST'},
]
@Component({
  selector: 'app-flight-status-table',
  templateUrl: './flight-status-table.component.html',
  styleUrls: ['./flight-status-table.component.scss']
})
export class FlightStatusTableComponent {
  private inboundFlights: FlightNumber[];
  columnDisplay: string[] = ['flightNumber', 'arrivalTime', 'status', 'departureAirport'];
  dataSource = FLIGHT_DATA;

  constructor(private flightTrackerService: FlightTrackerService) {}

  ngOnInit() {
    this.inboundFlights = this.flightTrackerService.getInboundFlights();
    this.flightTrackerService.inboundFlightsChanged.subscribe(
      newFlights => {
        this.inboundFlights = newFlights;
        this.getFlightStatuses();
      }
    )
    this.getFlightStatuses();
  }

  //transform flight status map into an array of FlightStatus objects and
  //assign to dataSource
  getFlightStatuses() {
    this.dataSource = Array.from(this.flightTrackerService.getArrivingFlightStatuses(this.inboundFlights))
      .map(flightStatus => {
        return {
          flightNumber: flightStatus[0],
          arrivalTime: new Date(flightStatus[1].arrivalDate.dateLocal),
          status: flightStatus[1].status,
          departureAirport: flightStatus[1].departureAirportFsCode
        }
      })
  }

}
