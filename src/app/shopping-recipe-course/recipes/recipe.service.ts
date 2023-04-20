import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a default recipe', 
    'https://www.cookipedia.co.uk/wiki/images/7/7d/Aperitif_cheese_balls_recipe.jpg'),
    new Recipe('Another test recipe', 'this is another recipe',
    'https://live.staticflickr.com/6233/6303474893_ef0cbc1297_b.jpg')
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
