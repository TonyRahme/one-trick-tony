import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XYChartDemoComponent } from './xychart-demo.component';

describe('XYChartDemoComponent', () => {
  let component: XYChartDemoComponent;
  let fixture: ComponentFixture<XYChartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XYChartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XYChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
