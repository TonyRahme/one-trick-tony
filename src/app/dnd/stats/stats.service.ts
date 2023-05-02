import { Injectable } from '@angular/core';
import { StatBlock, statTypes } from './stats.model';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  createStat(): StatBlock {
    let multiRoll:number[] = [];
    multiRoll = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 6) + 1
      );
      const multiRollResult = multiRoll.toLocaleString();
      multiRoll.sort().shift();
      const reducedMultiRoll = multiRoll.reduce((prev, cur) => prev + cur);
      return {
        rawScore: reducedMultiRoll,
        multiRollArray: multiRollResult,
      }
  }

  createStatBlocks = ():Map<statTypes, StatBlock> => {
    return new Map(Object.values(statTypes).map((stat) => [stat, this.createStat()]
    ))
  }

  evaluateStatsBalance(totalVal: number):string {
    
    return (
    totalVal === 69
    ? "Nice"
    :  totalVal < 70
    ? "Too Low"
    : totalVal > 80
    ? "Too High"
    : "Balanced"
    );
  }
  

}
