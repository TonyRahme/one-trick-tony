import { Injectable } from '@angular/core';
import _ from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  shiftAndExtractEntityExitsArray = (data: string[]): any[] => {
    const entityType  = _.head(data);
    const exits = _.tail(data);
    return [entityType? entityType : "", exits? exits : []];
  }

  extractArrayFromRegexMatch = (entityType: string, regex: RegExp): string[] => {
    let match = entityType.match(regex);
    return match !== null ? Array.from<string>(match) : [];
  }

  decodeExitRegex = (exitCodes: string[]): string[] => {
    const exitsRegex = /(s?[A-Z])|((\d{1,}w?)|[a-z][A-Z])/g
    let decodedExits: string[] = [];
    exitCodes.forEach(ec => {
      const [exitCode, amount] = this.extractArrayFromRegexMatch(ec, exitsRegex);

      switch(amount) {
        //lW: add 1 exit on each long wall, sW: add 1 exit on each short walls,, ie add 2 exits into the array
          case 'lW':
          case 'sW':
              decodedExits.push(exitCode,exitCode);
              break;
          case 'mW':
              decodedExits.push(exitCode);
              break;
          default:
              for(let i=0;i<Number(amount);i++) {
                  decodedExits.push(exitCode);
              }
      }
    });
    return decodedExits;
  }
}
