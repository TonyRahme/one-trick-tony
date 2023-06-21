import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectListComponent } from './personal-project-list.component';

describe('PersonalProjectListComponent', () => {
  let component: PersonalProjectListComponent;
  let fixture: ComponentFixture<PersonalProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
