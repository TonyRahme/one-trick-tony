import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutboundFlightComponent } from './flight-tracker/outbound-flight/outbound-flight.component';
import { StoreModule } from '@ngrx/store';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { DropdownDirective } from './shopping-recipe-course/shared/dropdown.directive';
import { XYChartDemoComponent } from './flight-tracker/charts/xychart-demo/xychart-demo.component';
import { ScatterChartDemoComponent } from './flight-tracker/charts/scatter-chart-demo/scatter-chart-demo.component';
import { DndComponent } from './dnd/dnd.component';
import { StatsComponent } from './dnd/stats/stats.component';
import { StatComponent } from './dnd/stats/stat/stat.component';
import { RandomGeneratorComponent } from './dnd/random-generator/random-generator.component';
import { DungeonCanvasComponent } from './dnd/random-generator/dungeon-canvas/dungeon-canvas.component';
import { SkillsComponent } from './about-me/middle-content/skills/skills.component';
import { TopContentComponent } from './about-me/top-content/top-content.component';
import { MiddleContentComponent } from './about-me/middle-content/middle-content.component';
import { BottomContentComponent } from './about-me/bottom-content/bottom-content.component';
import { WorkExperienceListComponent } from './about-me/middle-content/work-experience-list/work-experience-list.component';
import { WorkExperienceComponent } from './about-me/middle-content/work-experience-list/work-experience/work-experience.component';
import { FlightStatusTableComponent } from './flight-tracker/flight-status-table/flight-status-table.component';
import { PersonalProjectListComponent } from './about-me/middle-content/personal-project-list/personal-project-list.component';
import { PersonalProjectComponent } from './about-me/middle-content/personal-project-list/personal-project/personal-project.component';
import { EducationListComponent } from './about-me/middle-content/education-list/education-list.component';
import { EducationComponent } from './about-me/middle-content/education-list/education/education.component';

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
    path: 'dnd',
    component: DndComponent,
  },
  {
    path: 'shopping-recipes-course',
    component: ShoppingRecipeCourseComponent,
  },
  {
    path: 'shopping-recipes-course/recipes',
    component: RecipesComponent,
  },
  {
    path: 'shopping-recipes-course/shopping',
    component: ShoppingListComponent,
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightTrackerComponent,
    AboutMeComponent,
    ShoppingRecipeCourseComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    FlightNumberListComponent,
    OutboundFlightComponent,
    BasicHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    XYChartDemoComponent,
    ScatterChartDemoComponent,
    DndComponent,
    StatsComponent,
    StatComponent,
    RandomGeneratorComponent,
    DungeonCanvasComponent,
    SkillsComponent,
    TopContentComponent,
    MiddleContentComponent,
    BottomContentComponent,
    WorkExperienceListComponent,
    WorkExperienceComponent,
    FlightStatusTableComponent,
    PersonalProjectListComponent,
    PersonalProjectComponent,
    EducationListComponent,
    EducationComponent,
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
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
