import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    )
  }

  
}
