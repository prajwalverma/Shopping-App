import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') name?: ElementRef;
  @ViewChild('amountInput') amount?: ElementRef

  @Output() addIngredients = new EventEmitter<Ingredients>()

  onAddIngredients() {
    const ingredients = new Ingredients(this.name?.nativeElement.value, this.amount?.nativeElement.value)
    this.addIngredients.emit(ingredients)
  }
}
