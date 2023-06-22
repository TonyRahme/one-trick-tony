import { Component, Input } from '@angular/core';
import { Education } from 'src/app/about-me/about-me.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education: Education;
}
