import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];

  getingredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredients(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
