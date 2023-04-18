import { Injectable } from '@angular/core';
import { Flights } from '../flight-tracker.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_KEY = "1023649352919-739leevkir0rl4gd6cuj3a7lnrle9kpj.apps.googleusercontent.com";

@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {


  constructor(private http: HttpClient) { 
    
  }

  getFlightData(outboundFlight: Flights): Observable<Document> {
    let keUrl = `https://www.google.com/search?client=firefox-b-1-d&q=flight+${outboundFlight.code}+${outboundFlight.number}`;
    return this.getDocument(keUrl);
  }

  getDocument(url: string): Observable<Document> {
    return new Observable(observer => {
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener('load', () => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xhr.responseText, 'text/html');
        observer.next(doc);
        observer.complete();
      });
  
      xhr.addEventListener('error', error => {
        observer.error(error);
      });
  
      xhr.open('GET', url);
      xhr.send();
    });
  }

}
