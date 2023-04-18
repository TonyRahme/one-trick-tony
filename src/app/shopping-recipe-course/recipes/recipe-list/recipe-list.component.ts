import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a default recipe', 
    'https://www.cookipedia.co.uk/wiki/images/7/7d/Aperitif_cheese_balls_recipe.jpg'),
    new Recipe('Another test recipe', 'this is another recipe',
    'https://live.staticflickr.com/6233/6303474893_ef0cbc1297_b.jpg')
  ];
  @Output() onSelectedRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {

  }

  onSelectRecipe(recipe: Recipe) {
    this.onSelectedRecipe.emit(recipe);
  }
}
