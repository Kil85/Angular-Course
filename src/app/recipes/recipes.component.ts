import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
      this.recipeService.selectedRecipe.subscribe((sth)=>this.selectedRecipe = sth)
  }
  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
