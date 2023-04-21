import { Airline, FlightNumber } from "./flight-tracker.model";

export const month = {
    [1]: "JAN",
    [2]: "FEB",
    [3]: "MAR",
    [4]: "APR",
    [5]: "MAY",
    [6]: "JUN",
    [7]: "JUL",
    [8]: "AUG",
    [9]: "SEP",
    [10]: "OCT",
    [11]: "NOV",
    [12]: "DEC",
    }
    ;
export const days: number[] = [31,28,31,30,31,30,31,31,30,31,30,31];

export const outboundAirlines: Airline[] = [
    new Airline("KE", "Korean Air"),
    new Airline("QR", "Qatar Airways"),
    new Airline("TK", "Turkish Airlines"),
    new Airline("AF", "Air France"),
]

export const inboundFlights: FlightNumber[] = [
    new FlightNumber('B6', 455),
    new FlightNumber('TK', 82),
    new FlightNumber('LH', 425),
];

