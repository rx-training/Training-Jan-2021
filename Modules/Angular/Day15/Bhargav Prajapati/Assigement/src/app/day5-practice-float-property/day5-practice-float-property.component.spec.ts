import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticeFLoatPropertyComponent } from './day5-practice-float-property.component';

describe('Day5PracticeFLoatPropertyComponent', () => {
  let component: Day5PracticeFLoatPropertyComponent;
  let fixture: ComponentFixture<Day5PracticeFLoatPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticeFLoatPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticeFLoatPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
