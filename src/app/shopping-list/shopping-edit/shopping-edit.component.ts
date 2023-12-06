import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('inputName', { static: false }) givenName: ElementRef;
  @ViewChild('inputAmount', { static: false }) givenAmount: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  onSubmit() {
    const name = this.givenName.nativeElement.value;
    const amount = this.givenAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.addedIngredient.emit(newIngredient);
  }
}
