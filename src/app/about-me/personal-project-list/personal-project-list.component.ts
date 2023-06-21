import { Component } from '@angular/core';
import { Project } from '../about-me.model';
import { personalProjectList } from './personal-project.config';

@Component({
  selector: 'app-personal-project-list',
  templateUrl: './personal-project-list.component.html',
  styleUrls: ['./personal-project-list.component.scss']
})
export class PersonalProjectListComponent {

  personalProjects: Project[] = personalProjectList;
}
