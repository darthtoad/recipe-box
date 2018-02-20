import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RecipeEditComponent } from './recipe-edit.component'
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  RecipeListComponent,
                  RecipeDetailsComponent,
                  RecipeEditComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
