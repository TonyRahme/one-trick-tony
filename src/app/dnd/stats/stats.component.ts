import { Component } from '@angular/core';
import { StatBlock, statTypes } from './stats.model';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  constructor(private statsService: StatsService) {}

  statBlockMap: Map<statTypes, StatBlock> = new Map();
  statPoints: number;
  statsPointBalance: string;

  ngOnInit() {
    this.initStats();
  }

  initStats() {
  this.statBlockMap = this.statsService.createStatBlocks();
  this.statPoints = Array.from(this.statBlockMap.values()).reduce((acc, cur) => acc + cur.rawScore, 0);
  this.statsPointBalance = this.statsService.evaluateStatsBalance(this.statPoints);
}

  refresh() {
    this.initStats();
  }

}
