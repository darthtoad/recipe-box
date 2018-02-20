import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-edit',
  template: `
    <div *ngIf="childEditRecipe">
      <label>Name:</label>
      <input type="text" [(ngModel)]="childEditRecipe.name">
      <label>Ingredients (please separate with commas):</label>
      <input [value]="childEditRecipe.ingredients" (input)="childEditRecipe.ingredients = $event.target.value.split(', ')">
      <label>Instructions:</label>
      <input [value]="childEditRecipe.instructions" (input)="childEditRecipe.instructions = $event.target.value.split(', ')">
      <button (click)="finishEditingHasBeenClicked()">Finish editing</button>
    </div>
  `
})

export class RecipeEditComponent {
  @Input() childEditRecipe: Recipe;

  @Output() finishedEditSender = new EventEmitter();

  finishEditingHasBeenClicked() {
    this.finishedEditSender.emit();
  }
}
