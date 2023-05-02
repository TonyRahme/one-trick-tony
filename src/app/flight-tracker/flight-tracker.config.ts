import { Airline, FlightNumber, FlightStatusDTO } from "./flight-tracker.model";
import TK82_2023_04_23 from "./sample/TK82_2023_04_23.json";
import BOS_2023_04_24_0900_JSON from "./sample/BOS_2023_04_24_0900.json";
/* import BOS_2023_04_24_0000_JSON from "./sample/BOS_2023_04_24_0000.json";
import BOS_2023_04_24_0600_JSON from "./sample/BOS_2023_04_24_0600.json";
import BOS_2023_04_24_1200_JSON from "./sample/BOS_2023_04_24_1200.json";
import BOS_2023_04_24_1800_JSON from "./sample/BOS_2023_04_24_1800.json";
 */

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
    new FlightNumber('B6', 1621),
    new FlightNumber('AA', 109),
    new FlightNumber('DL', 113),
    new FlightNumber('UA', 336),
    new FlightNumber('NK', 1155),
    new FlightNumber('WN', 3346),
    new FlightNumber('AC', 99),
    new FlightNumber('QR', 743),
];

/**
 *  URL example
 *  https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/TK/82/dep/2023/04/23?appId=b2779c7d&appKey=b0c9e85d16976280d4a2fb57ed697525&utc=false&airport=BOS
 */

export const TK_82_2023_04_23 = TK82_2023_04_23;

export const BOS_FLIGHTSTATUS_MAP_2023_04_24: Map<string, FlightStatusDTO> = jsonToMap(BOS_2023_04_24_0900_JSON)


/* export const BOS_FLIGHTSTATUS_MAP_2023_04_24_0000: Map<string, FlightStatusDTO> = jsonToMap(BOS_2023_04_24_0000_JSON)
export const BOS_FLIGHTSTATUS_MAP_2023_04_24_0600: Map<string, FlightStatusDTO> = jsonToMap(BOS_2023_04_24_0600_JSON)
export const BOS_FLIGHTSTATUS_MAP_2023_04_24_1200: Map<string, FlightStatusDTO> = jsonToMap(BOS_2023_04_24_1200_JSON)
export const BOS_FLIGHTSTATUS_MAP_2023_04_24_1800: Map<string, FlightStatusDTO> = jsonToMap(BOS_2023_04_24_1800_JSON)

export const BOS_FLIGHTSTATUS_MAP_2023_04_24_ALL: Map<string, FlightStatusDTO> = new Map([
    ...Array.from(BOS_FLIGHTSTATUS_MAP_2023_04_24_0000.entries()), ...Array.from(BOS_FLIGHTSTATUS_MAP_2023_04_24_0600.entries()),
    ...Array.from(BOS_FLIGHTSTATUS_MAP_2023_04_24_1200.entries()), ...Array.from(BOS_FLIGHTSTATUS_MAP_2023_04_24_1800.entries())
])
 */
function jsonToMap(json: any): Map<string, FlightStatusDTO> {
    return new Map<string, FlightStatusDTO>(
        json?.flightStatuses
            .map((fs: FlightStatusDTO) => [`${fs.carrierFsCode}${fs.flightNumber}`, fs]));
}