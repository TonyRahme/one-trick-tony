import { Component } from '@angular/core';
import { ShoppingService } from './shopping-list/shopping.service';

@Component({
  selector: 'app-shopping-recipe-course',
  templateUrl: './shopping-recipe-course.component.html',
  styleUrls: ['./shopping-recipe-course.component.scss'],
  providers: [ShoppingService]
})
export class ShoppingRecipeCourseComponent {
  loadedFeature: string = 'recipes';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
