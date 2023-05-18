import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonCanvasComponent } from './dungeon-canvas.component';

describe('DungeonCanvasComponent', () => {
  let component: DungeonCanvasComponent;
  let fixture: ComponentFixture<DungeonCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
