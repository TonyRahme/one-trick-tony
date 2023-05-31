import { Component } from '@angular/core';
import { Skill } from '../skills.model';

@Component({
  selector: 'about-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor() {}

  skills: Skill[] = [
    new Skill('Design & Development',
    'My exposure to coding was through game development. When I was 12 years old I stumbled upon a game engine that allowed me to learn coding. From then on my facination in computers grew!',
    'assets/about-me-images/computer.png', 'computer'),
    new Skill('Lorem Ipsum Dolor',
    'Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.',
    'assets/about-me-images/climbing.png',
    'climbing')
  ];

}
