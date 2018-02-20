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
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [new Recipe("Chorizo Chili", ["1 can black beans", "1 can pinto beans", "1/2 lb chorizo", "1 onion", "2 serrano peppers", "1 green bell pepper", "1 red bell pepper", "3 cloves garlic", "4 oz mushrooms"], ["Mix ingredients in a pot", "Wait", "Serve"]), new Recipe("Poop", ["Food", "Butt"], ["Eat food", "Wait", "Poop"])]
}
