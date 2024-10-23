import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredients[] = [
    new Ingredients('Tomato', 2),
    new Ingredients('Potato', 7),
    new Ingredients('Onion', 2),
    new Ingredients('Peas', 30),
  ]

  constructor() { }

  addNewIngredients(ingredient: Ingredients){
    this.ingredients.push(ingredient)
  }
}
