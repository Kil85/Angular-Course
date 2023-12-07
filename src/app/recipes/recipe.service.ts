import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Lody',
      'Zamroz mleko',
      'https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_1280.jpg',
      [
        new Ingredient('mleko', 1),
        new Ingredient('cukier', 1),
        new Ingredient('Truskawki', 30),
      ]
    ),
    new Recipe(
      'Pizza',
      'Wsadz Donatello do piekarnika',
      'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg',
      [
        new Ingredient('maka', 1),
        new Ingredient('woda', 0.7),
        new Ingredient('salami', 12),
      ]
    ),
  ];

  getRecipies(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientsToSL(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      this.slService.addIngredients(ingredient);
    }
  }
}
