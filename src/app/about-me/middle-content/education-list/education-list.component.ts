import { Component, Input } from '@angular/core';
import { Education } from '../../about-me.model';
import { educationList } from './education.config';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent {
  @Input() educationList: Education[] = educationList;
}
