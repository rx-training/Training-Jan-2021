import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8LayoutComponent } from './day8-layout.component';

describe('Day8LayoutComponent', () => {
  let component: Day8LayoutComponent;
  let fixture: ComponentFixture<Day8LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
