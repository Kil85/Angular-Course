import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() onRecipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Lody',
      'Zamroz mleko',
      'https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_1280.jpg'
    ),
    new Recipe(
      'Pizza',
      'Wsadz Donatello do piekarnika',
      'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg'
    ),
  ];

  onRecipeClicked(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
