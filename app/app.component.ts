import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>RECIPE BOX</h1>
      <h3>A website for recipes</h3>
    </div>
    <recipe-list [childRecipeList]="recipes" (showRecipeSender)="showRecipe($event)"></recipe-list>
    <recipe-details [childSelectedRecipe]="selectedRecipe" (hideRecipeSender)="hideRecipe()" (editRecipeSender)="editARecipe()"></recipe-details>
    <recipe-edit [childEditRecipe]="editRecipe" (changeNameSender)="changeName($event)" (changeIngredientsSender)="changeIngredients($event)" (changeInstructionsSender)="changeInstructions($event)" (finishedEditSender)="finishEditing()"></recipe-edit>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [new Recipe("Chorizo Chili", ["1 can black beans", "1 can pinto beans", "1/2 lb chorizo", "1 onion", "2 serrano peppers", "1 green bell pepper", "1 red bell pepper", "3 cloves garlic", "4 oz mushrooms"], ["Mix ingredients in a pot", "Wait", "Serve"]), new Recipe("Poop", ["Food", "Butt"], ["Eat food", "Wait", "Poop"])];
  selectedRecipe = null;
  editRecipe = null;

  changeName(nameText) {
    console.log(this.editRecipe);
    console.log(this.editRecipe.name);
    this.editRecipe.name = nameText;
  }

  changeIngredients(ingredientsText) {
    console.log(ingredientsText);
    this.editRecipe.ingredients = ingredientsText;
  }

  changeInstructions(instructionsText) {
    console.log(instructionsText);
    this.editRecipe.instructions = instructionsText;
  }

  showRecipe(currentRecipe) {
    this.selectedRecipe = currentRecipe;
    console.log(this.selectedRecipe);
  }

  hideRecipe() {
    this.selectedRecipe = null;
  }

  editARecipe() {
    this.editRecipe = this.selectedRecipe;
  }

  finishEditing() {
    // this.editRecipe.ingredients.split(", ");
    // this.editRecipe.instructions.split(", ");
    this.editRecipe = null;
  }
}
