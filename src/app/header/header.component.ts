import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() dataToParent = new EventEmitter<string>();

  shoppingListClicked() {
    this.dataToParent.emit('shoppingList');
  }

  recipeClicked() {
    this.dataToParent.emit('recipes');
  }
}
