import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
  <ul>
    <li *ngFor="let currentRecipe of childRecipeList" >
      <h3>{{currentRecipe.name}}</h3>
      <button (click)="showRecipeHasBeenClicked(currentRecipe)">Show Recipe!</button>
    </li>
  </ul>
  `
})

export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];

  @Output() showRecipeSender = new EventEmitter();

  showRecipeHasBeenClicked(recipeToShow: Recipe) {
    this.showRecipeSender.emit(recipeToShow);
  }

}

//      <button (click)="showRecipeHasBeenClicked(currentRecipe)">Show recipe details</button>

// showRecipeHasBeenClicked(recipeToShow: Recipe) {
//   this.clickSender.emit(recipeToShow);
// }

// <ul>
// <li *ngFor="let currentIngredient of currentRecipe">{{recipe.ingredients}}
// </ul>
// <br>Instructions {{currentTask.priority}}<br>
// Complete?
// <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
// <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/><br>
// <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
