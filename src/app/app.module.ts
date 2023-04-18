import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleApis } from 'googleapis';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

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
import { FlightNumberListComponent } from './flight-tracker/flight-number-list/flight-number-list.component';
import { FlightNumberComponent } from './flight-tracker/flight-number-list/flight-number/flight-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutboundFlightComponent } from './flight-tracker/outbound-flight/outbound-flight.component';
import { StoreModule } from '@ngrx/store';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';

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
  },
  {
    path: 'shopping-recipes-course#recipes',
    component: RecipesComponent,
  },
  {
    path: 'shopping-recipes-course#shopping',
    component: ShoppingListComponent,
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
    HeaderComponent,
    FlightNumberListComponent,
    FlightNumberComponent,
    OutboundFlightComponent,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
