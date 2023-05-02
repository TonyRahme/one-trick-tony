import { Component, Input } from '@angular/core';
import { StatBlock, statTypes } from '../stats.model';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent {
@Input() stat: statTypes;
@Input() statBlock: StatBlock;
}
