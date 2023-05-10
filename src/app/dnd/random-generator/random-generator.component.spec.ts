import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGeneratorComponent } from './random-generator.component';

describe('RandomGeneratorComponent', () => {
  let component: RandomGeneratorComponent;
  let fixture: ComponentFixture<RandomGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
