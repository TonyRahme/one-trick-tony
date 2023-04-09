import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FlightTrackerComponent } from './flight-tracker/flight-tracker.component';
import { ShoppingRecipeCourseComponent } from './shopping-recipe-course/shopping-recipe-course.component';
import { RecipesComponent } from './shopping-recipe-course/recipes/recipes.component';
import { RecipeListComponent } from './shopping-recipe-course/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './shopping-recipe-course/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './shopping-recipe-course/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-recipe-course/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-recipe-course/shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './shopping-recipe-course/header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'about-me',
    pathMatch: 'full',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'flight-tracker',
    component: FlightTrackerComponent,
  },
  {
    path: 'shopping-recipes-course',
    component: ShoppingRecipeCourseComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightTrackerComponent,
    ShoppingRecipeCourseComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
