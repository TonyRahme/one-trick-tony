import { Component } from '@angular/core';
import { WorkExperience } from '../../about-me.model';
import { workExperienceList } from './work-experience.config';

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent {

  workExperiences: WorkExperience[] = workExperienceList;
}
