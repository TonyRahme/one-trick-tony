import { Component, Input } from '@angular/core';
import { Project } from '../../../about-me.model';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent {
  @Input() project: Project;
}
