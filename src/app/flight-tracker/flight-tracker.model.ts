export interface FlightStatusDTO {
    flightId: number;
    carrierFsCode: string;
    flightNumber: string;
    departureAirportFsCode: string;
    arrivalAirportFsCode: string;
    departureDate: FlightDate;
    arrivalDate: FlightDate;
    status: string;
    delays: {},
}

export interface FlightDate {
    dateUtc: Date;
    dateLocal: Date;
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