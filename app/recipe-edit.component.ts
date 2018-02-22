import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-edit',
  template: `
    <div *ngIf="childEditRecipe">
      <h3>Press enter to change values. Press the button to finish editing</h3>
      <label>Name:</label>
      <input type="text" #name (keydown.enter)="onChangeName(name.value)">
      <label>Ingredients (please separate with commas and spaces):</label>
      <input #ingredients (keydown.enter)="onChangeIngredients(ingredients.value)">
      <label>Instructions:</label>
      <input #instructions (keydown.enter)="onChangeInstructions(instructions.value)">
      <button (click)="finishEditingHasBeenClicked()">Finish editing</button>
    </div>
  `
})

export class RecipeEditComponent {
  @Input() childEditRecipe: Recipe;

  @Output() finishedEditSender = new EventEmitter();
  @Output() changeNameSender = new EventEmitter();
  @Output() changeIngredientsSender = new EventEmitter();
  @Output() changeInstructionsSender = new EventEmitter();

  onChangeName(nameText) {
    this.changeNameSender.emit(nameText);
  }

  onChangeIngredients(ingredientsText) {
    this.changeIngredientsSender.emit(ingredientsText.split(", "));
  }

  onChangeInstructions(instructionsText) {
    this.changeInstructionsSender.emit(instructionsText.split(", "));
  }

  finishEditingHasBeenClicked() {
    this.finishedEditSender.emit();
  }
}
