import { Component } from '@angular/core';
import { Skill } from '../about-me.model';
import { skillsConfig } from './skills.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: Skill[] = [];

  constructor() {}

  ngOnInit() {
    this.skills = skillsConfig;
  }

}
