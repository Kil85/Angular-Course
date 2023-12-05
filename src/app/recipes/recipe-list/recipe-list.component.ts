import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Lody',
      'Zamroz mleko',
      'https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_1280.jpg'
    ),
    new Recipe(
      'Lody',
      'Zamroz mleko',
      'https://cdn.pixabay.com/photo/2018/05/10/22/42/ice-cream-3389010_1280.jpg'
    ),
  ];
}
