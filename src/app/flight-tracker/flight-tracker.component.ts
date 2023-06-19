import { Component } from '@angular/core';
import { AirTime, FlightNumber } from './flight-tracker.model';
import { FlightTrackerService } from './service/flight-tracker.service';
import { MatSnackBar } from '@angular/material/snack-bar';


enum months {JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC};
const days: number[] = [31,28,31,30,31,30,31,31,30,31,30,31];

@Component({
  selector: 'app-flight-tracker',
  templateUrl: './flight-tracker.component.html',
  styleUrls: ['./flight-tracker.component.scss'],
  providers: [FlightTrackerService],
})
export class FlightTrackerComponent {

	private outboundFlight: FlightNumber;
	private inboundFlights: FlightNumber[];
	numberOfFlightsByAirline: Map<string, number>;
	airTimes: Map<string, AirTime[]>;

  /**
   * JAVA CODE COPIED OVER
   * 
   * TODO: CONVERT JAVA CODE TO TYPESCRIPT
   * 
   */
	constructor(private flightTrackerService: FlightTrackerService, private snackBar: MatSnackBar) {}


	ngOnInit() {
		
		this.inboundFlights = this.flightTrackerService.getInboundFlights();
		this.flightTrackerService.outboundFlightChanged.subscribe(
		newFlight => {
			this.outboundFlight = newFlight;
		}
		)
		
		this.flightTrackerService.inboundFlightsChanged.subscribe(
			newFlights => {
				this.inboundFlights = newFlights;
			}
		)
		this.numberOfFlightsByAirline = this.flightTrackerService.getNumberOfArrivingFlightsByAirlines(this.inboundFlights);

		//GET DELAY BY AIRLINES based on the size of each key in map
		this.airTimes = new Map<string, AirTime[]>(
			Array.from(this.flightTrackerService.getDelayByAirlines())
				.filter(airline => 
					this.numberOfFlightsByAirline.has(airline[0]))
				.sort((a, b) =>
			b[1].length - a[1].length)
		);

	}
		
	testAPICall() {

		this.snackBar.open('Coming Soon!', 'ok :(', {duration: 2000});
	/* 	let departingStatus = this.flightTrackerService.getDepartingFlightStatus(new FlightNumber('QR', 744));
		let arrivingStatuses = this.flightTrackerService.getArrivingFlightStatuses(this.inboundFlights);
		console.log(arrivingStatuses);

		let testArrStatuses = this.flightTrackerService.getArrivingFlightStatuses();
		let testAirlineEstArr = new Date(arrivingStatuses.get("QR743").operationalTimes.estimatedGateArrival.dateLocal);
		let testEstArrMin = testAirlineEstArr.getTime()/60000;
		
		let testAirlineSchArr = new Date(arrivingStatuses.get("QR743").operationalTimes.scheduledGateArrival.dateLocal);
		let testSchArrMin = testAirlineSchArr.getTime()/60000;
		
		let delays: any[] = [];

		Array.from(testArrStatuses).forEach(([id, fs]) => {
			if(fs.operationalTimes.estimatedGateArrival && fs.operationalTimes.scheduledGateArrival) {
				let estArr = new Date(fs.operationalTimes.estimatedGateArrival?.dateLocal);
				let schArr = new Date(fs.operationalTimes.scheduledGateArrival?.dateLocal);
				let delayMin = (schArr.getTime() - estArr.getTime())/60000
				if(delayMin > 0) delays.push({flight: id, delay: delayMin});
			}
		}) */
		// console.log('test arrival schedules', testArrStatuses)
		// console.log('delays', delays);
		
	}

	parseChart() {

	}

}
