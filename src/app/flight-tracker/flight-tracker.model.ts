export interface FlightStatusDTO {
    flightId: number;
    carrierFsCode: string;
    flightNumber: string;
    departureAirportFsCode: string;
    arrivalAirportFsCode: string;
    departureDate: FlightDate;
    arrivalDate: FlightDate;
    status: string;
    operationalTimes: OperationalTimes;
    delays?: {
        arrivalGateDelayMinutes?: string;
    };
    flightDurations?: {
        scheduledAirMinutes?: number;
    }
}

export interface OperationalTimes {
    publishedDeparture?: FlightDate,
    scheduledGateDeparture?: FlightDate,
    flightPlanPlannedDeparture?: FlightDate,
    scheduledRunwayDeparture?: FlightDate,
    estimatedRunwayDeparture?: FlightDate,
    publishedArrival?: FlightDate,
    flightPlanPlannedArrival?: FlightDate,
    scheduledGateArrival?: FlightDate,
    estimatedGateArrival?: FlightDate,
    scheduledRunwayArrival?: FlightDate;
}

export interface FlightDate {
    dateUtc: string;
    dateLocal: string;
}

export interface AirTime {
    flightNumber: string,
    airTime: number,
    arrivalTime: Date,
  }

  export interface DelayFlight {
    flightNumber: string,
    delayTime: number,
    arrivalTime: Date,
  }

export class FlightNumber {
    constructor(public carrier: string, public flight: number){}
}

export class Airline {
    constructor(
        public code: string,
        public name: string,
    ) {}
}

export interface FlightStatus {
        flightNumber: string;
        arrivalTime: Date;
        status: string;
        departureAirport: string;
}