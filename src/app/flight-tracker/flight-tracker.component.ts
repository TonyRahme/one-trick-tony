import { Component } from '@angular/core';
import { FlightNumber } from './flight-tracker.model';
import { FlightTrackerService } from './service/flight-tracker.service';


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

  /**
   * JAVA CODE COPIED OVER
   * 
   * TODO: CONVERT JAVA CODE TO TYPESCRIPT
   * 
   */
	constructor(private flightTrackerService: FlightTrackerService) {}


	ngOnInit() {

		console.log(this.numberOfFlightsByAirline);
		
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
		}
		
	testAPICall() {
		let departingStatus = this.flightTrackerService.getDepartingFlightStatus(new FlightNumber('QR', 744));
		let arrivingStatuses = this.flightTrackerService.getArrivingFlightStatuses(this.inboundFlights);
		console.log(arrivingStatuses);
	}

	parseChart() {

	}

    checkDate(
		hourInb: number, monthInb: string, dayInb: string, 
		hourKe: number, monthKe: string, dayKe: string, 
		airport: string, destination: string): number {
    	let monthINB: number = (months[monthInb]); //actual month inb flight
    	let monthKE: number = (months[monthKe]); //actual month ke flight
    	let dayKE = Number(dayKe); //actual day ke flight
    	let dayINB = Number(dayInb);
    	console.log("keM"+monthKE+" keD:"+dayKE+" hourKe:"+hourKe+
    			"\ninbM:"+monthINB+" inbD:"+dayInb+" hourInb:"+hourInb+
    			"\n"+airport + "=?=" +destination.toUpperCase()+" ");
		if (airport.includes(destination.toUpperCase())){ //not the same airport code or track all
			if (monthINB == monthKE && dayINB == dayKE) {
					return 0;//inbound landed day of flight
			}
			if (hourKe < hourInb) {//if true then flight could have flew day before
				if (monthINB == monthKE //same month?
						|| monthINB == (monthKE-1) //month before?
						|| monthINB == 1 && monthKE == 12){//new year case
					if(dayINB == (dayKE-1) //day before in same month
							|| (dayINB == days[monthINB-1] && dayKE == 1)){//inb flight last day of month, ke flight first day of month 
						return 1;//inbound landed day before flight
					}
				}
			} 
    	}
    	
    	return -1; //not the flight
    }


	/* trackFlight(destination: string, outboundFlight: FlightNumber, currentDate: string): void {
		outboundFlight={carrier:"KE", flight: 92};
		let spreadsheetId = "156Fm_ktpuNwmOp5d1I8KEFhxHTaLHxvVmonDpd1r34k";
		let range = "FlightTracker!A2:A";
		let keDocument: Document; 
		let keDays: Element[];
		let keScheduleTime: Element[];
		let keDateInfo: string[];
		let keSchedTime: string[];
		let nowDate: string[] = ["","",""];
		let keHour = 0;
		this.flightTrackerService.getFlightData(outboundFlight).subscribe(
			flightDoc => {
			keDocument = flightDoc;
			keDays = Array.from(keDocument.getElementsByClassName("TnUzCf"));
			keScheduleTime = Array.from(keDocument.getElementsByClassName("div.kBrfsc"));
			let date = new Date("MM-DD-YYYY");
			if (date.getFullYear() %4 == 0){//leap year
			days[1] = 29;
			}
			if (currentDate == ""){
			  nowDate =  new Date("YYYY-MM-DD").toString().split("-");//YYYY-MM-DD 0:YYYY, 1:MM, 2:DD
			}
			else {
			  nowDate[0] = date.getFullYear().toString();
			  nowDate[2] = currentDate.substring(0,2);
			  nowDate[1] = months[currentDate.substring(2).toUpperCase()];
			}
		})
		console.log("Today's Date: "+Date.now().toString());
		let i = 0;
		Array.from(keDays).forEach(day => {
		  keDateInfo = day.textContent.split(" ");//Thu, January 2
		  keDateInfo[1] = keDateInfo[1].substring(0,3).toUpperCase(); //[JAN]uary
		  console.log(keDateInfo[1]);
		  if (months[keDateInfo[1]] == Number(nowDate[1])
			&& Number(keDateInfo[2])==Number(nowDate[2])) { //compare
			console.log("keSchedule"+keScheduleTime[i].textContent.toString());
			keSchedTime = keScheduleTime[i].textContent.split(" "); //0:depTime; 1:am/pm; 2:arrTime; 3:am/pm
			keHour = Number(keSchedTime[0].split(":")[0]);
			if (keHour < 12 && keSchedTime[1] === "pm"){
			  keHour += 12;
			}
			return;
		  }
		  else i++;
		});
		console.log(`Flight of ke: ${keDateInfo[1]} ${keDateInfo[2]} ${keHour}`);
		i = 0;
		List<List<Object>> values = response.getValues();
		//System.out.println(values.size());
		if (values == null || values.isEmpty()) {
			System.out.println("No data found.");
		} else {
		  List<List<Object>> inputValue = Arrays.asList(Arrays.asList());
		  let rowOperations = 2;
			System.out.println("Flight Numbers");
			for (List flight : values) {
				if (flight.isEmpty() || flight.get(0) == "") flight = values.get(values.indexOf(flight)+1);
				String airlineCode = flight.get(0).toString().substring(0,2);
				String flightNumber = flight.get(0).toString().substring(2);
				String url = "https://www.google.com/search?client=firefox-b-1-d&q=flight+"
				+airlineCode.toLowerCase()+"+"+flightNumber;
				System.out.println(airlineCode+" "+flightNumber);
				Document document = Jsoup.connect(url).get();
				Elements days = document.getElementsByClass("TnUzCf");
				Elements scheduleTime = document.select("div.kBrfsc");
				Elements arrival = document.select("tr.kWOKDd:nth-child(3)");
				Elements airPorts = document.select("table.ts:nth-child(2)");
				Elements statUs = document.select("span.l1P94c");
				boolean foundFlight = false;
				String[] dateInfo = new String[10];
				String[] schedTime = new String[10];
				
				String[] arrivalInfo = new String[10];
				String[] airports = new String[10];
				String status="";
				let hour = 0;
				i = 0;
				System.out.println("days size: "+days.size()+", "+"airPorts size: "+airPorts.size());
				for (Element day : days){
				  if (airPorts.size() == days.size() * 2){
					for (let j = i; j <= (i+1)*2-1; j++){
					  System.out.print(j+": ");
					  airports = airPorts.get(j).text().split(" ");//0:departure code, 1:arrival code
					  schedTime = scheduleTime.get(j).text().split(" ");
					  airports = airPorts.get(j).text().split(" ");
						  schedTime = scheduleTime.get(j).text().split(" "); //0:depTime; 1:am/pm; 2:arrTime; 3:am/pm
						  hour = Integer.parseInt(schedTime[2].split(":")[0]);//split arrTime take hour
						if (hour < 12 && schedTime[1].compareTo("pm") == 0){
						  hour += 12;
						}
						dateInfo = day.text().split(" ");//Thu, January 2
						dateInfo[1] = dateInfo[1].substring(0,3).toUpperCase();//[JAN]uary
						let dateChecked = 
							checkDate(hour, dateInfo[1], dateInfo[2], keHour, keDateInfo[1], keDateInfo[2], airports[1], destination);
						if ( dateChecked == 1 || dateChecked == 0) {
						  //Original KE schedule less than original inb airline use prev day inb flight
							status = statUs.get(j).text();
							arrivalInfo = arrival.get(j).text().split(" ");
							foundFlight = true;
							System.out.print("dateCheck = "+dateChecked + " ");
							break;
						}
						else {
						  System.out.println("dateCheck = "+dateChecked + " Not found");
						}
					}
					if (foundFlight) {
					  inputValue = Arrays.asList(Arrays.asList(airports[0], arrivalInfo[0]+arrivalInfo[1],
						  airports[1],arrivalInfo[4]+arrivalInfo[5],
						  status, dateInfo[1]+" "+dateInfo[2]));
					  System.out.println("Yes found");
					  break;
					}
					i+=2;
				  } else {//if no two flights in a day
					System.out.print(i+": ");
					airports = airPorts.get(i).text().split(" ");
					schedTime = scheduleTime.get(i).text().split(" "); //0:depTime; 1:am/pm; 2:arrTime; 3:am/pm
					hour = Integer.parseInt(schedTime[2].split(":")[0]);//split arrTime take hour
					if (hour < 12 && schedTime[1].compareTo("pm") == 0){
					  hour += 12;
					}
					dateInfo = day.text().split(" ");//Thu, January 2
					dateInfo[1] = dateInfo[1].substring(0,3).toUpperCase();//[JAN]uary
					let dateChecked = 
						checkDate(hour, dateInfo[1], dateInfo[2], keHour, keDateInfo[1], keDateInfo[2], airports[1], destination);
					if ( dateChecked == 1 || dateChecked == 0) {
					  //Original KE schedule less than original inb airline use prev day inb flight
					  status = statUs.get(i).text();
					  arrivalInfo = arrival.get(i).text().split(" ");
					  foundFlight = true;
					  System.out.print("dateCheck = "+dateChecked + " ");
					}
					if (foundFlight) {
					  inputValue = Arrays.asList(Arrays.asList(airports[0], arrivalInfo[0]+arrivalInfo[1],
						  airports[1],arrivalInfo[4]+arrivalInfo[5],
						  status, dateInfo[1]+" "+dateInfo[2]));
					  System.out.println("Yes found");
					  break;
					}
					System.out.println("dateCheck = "+dateChecked + " Not found");
					i++;
					
				  }
				}
			  if (!foundFlight) {
				inputValue=Arrays.asList(
					Arrays.asList("NO FLIGHT","NO FLIGHT","NO FLIGHT","NO FLIGHT","NO FLIGHT","NO FLIGHT")
						);
			  }
				//List<List<Object>> testValue = Arrays.asList(Arrays.asList("this","is","only","a","test"));
				ValueRange body = new ValueRange()
					.setValues(inputValue);
				range = "FlightTracker!B"+String.valueOf(rowOperations)+":G"+String.valueOf(rowOperations);
				rowOperations++;
				//System.out.println(range);
				service.spreadsheets().values()
				.update(spreadsheetId, range, body)
				.setValueInputOption("RAW")
				.execute();
			}
			SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
			Date date = new Date();  
			System.out.println("Last update: "+formatter.format(date));
			range = "FlightTracker!J1";
			List<List<Object>> lastTimeUpdate = Arrays.asList(Arrays.asList(formatter.format(date)));
			ValueRange body = new ValueRange()
				.setValues(lastTimeUpdate);
			service.spreadsheets().values()
			.update(spreadsheetId, range, body)
			.setValueInputOption("RAW")
			.execute();
		}
		
		String rateRange = "FlightTracker!J2";
		ValueRange refreshRange = service.spreadsheets().values()
			.get(spreadsheetId, rateRange)
			.execute();
		List<List<Object>> refreshTime = refreshRange.getValues();
		if (refreshTime == null || refreshTime.isEmpty()){
		  System.out.println("No data found");
		} else {
		  let cycle = Integer.parseInt(refreshTime.get(0).get(0).toString().split(" ")[0])*60000;
		  timer.stop();
		  timer = new Timer(cycle, new TimerListener());
		  timer.start();
		  System.out.println(cycle);
		}
	}
	*/
	
}
