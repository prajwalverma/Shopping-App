import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipe: Recipe[] = [
    new Recipe("Shahi Paneer",
      "Homemade",
      "https://i.pinimg.com/564x/ae/f8/7c/aef87cb23bd64baf61ddcd275a4feb3b.jpg"),
    new Recipe("Chole Bhature",
      "A delicious fast food",
      "https://i.pinimg.com/564x/47/42/d6/4742d659e83fe416f7532797eb8a4097.jpg"),
    
  ] 

  constructor() { }

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
