export interface FlightTracker {
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