import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Hamburger',
    'Not vegan very meaty with lettuce, so a little bit vegetarian', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Beef', 1),
      new Ingredient('Lettuce', 1),
    ]
    ),
    new Recipe('Poutine',
    'Une very nice, tres bonne frenchy food from Montreal (oui oui)',
    'https://www.seasonsandsuppers.ca/wp-content/uploads/2014/01/new-poutine-1.jpg',
    [
      new Ingredient('Potato', 4),
      new Ingredient('Gravy', 100),
  ]
    )
  ];

  constructor(private shoppingService: ShoppingService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

}
