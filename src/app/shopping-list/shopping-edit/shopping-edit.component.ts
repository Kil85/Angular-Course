import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('inputName', { static: false }) givenName: ElementRef;
  @ViewChild('inputAmount', { static: false }) givenAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onSubmit() {
    const name = this.givenName.nativeElement.value;
    const amount = this.givenAmount.nativeElement.value;
    this.shoppingListService.addIngredients({ name: name, amount: amount });
  }
}
