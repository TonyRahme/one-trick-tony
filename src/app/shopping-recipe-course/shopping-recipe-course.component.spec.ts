import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingRecipeCourseComponent } from './shopping-recipe-course.component';

describe('ShoppingRecipeCourseComponent', () => {
  let component: ShoppingRecipeCourseComponent;
  let fixture: ComponentFixture<ShoppingRecipeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingRecipeCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingRecipeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
