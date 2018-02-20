import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-details',
  template: `
    <div *ngIf="childSelectedRecipe">
      <h3>{{childSelectedRecipe.name}}</h3>
      <ul>
        <li *ngFor="let currentIngredient of childSelectedRecipe.ingredients">{{currentIngredient}}</li>
      </ul>
      <ol>
        <li *ngFor="let currentStep of childSelectedRecipe.instructions">{{currentStep}}</li>
      </ol>
      <button (click)="hideRecipeHasBeenClicked()">Hide recipe</button>
      <br>
      <button (click)="editRecipeHasBeenClicked()">Edit Recipe</button>
    </div>
  `
})

export class RecipeDetailsComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() hideRecipeSender = new EventEmitter();
  @Output() editRecipeSender = new EventEmitter();

  hideRecipeHasBeenClicked() {
    this.hideRecipeSender.emit();
  }

  editRecipeHasBeenClicked() {
    this.editRecipeSender.emit();
  }
}
