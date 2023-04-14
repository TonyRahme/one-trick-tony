import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-recipe-course',
  templateUrl: './shopping-recipe-course.component.html',
  styleUrls: ['./shopping-recipe-course.component.scss']
})
export class ShoppingRecipeCourseComponent {
  loadedFeature: string = 'recipes';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
