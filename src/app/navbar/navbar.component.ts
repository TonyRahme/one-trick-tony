import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Link } from './link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links: Link[] = [
    {
      fragment: 'about-me',
      title: 'Home',
    },
    {
      fragment: 'flight-tracker',
      title: 'Flight Tracker',
    },
    {
      fragment: 'dnd',
      title: 'DnD',
    },
    {
      fragment: 'shopping-recipes-course',
      title: 'Shopping Recipes Course'
    }
  ]

  constructor(public route: ActivatedRoute) {}
}
