import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticePositionPropertyComponent } from './day5-practice-position-property.component';

describe('Day5PracticePositionPropertyComponent', () => {
  let component: Day5PracticePositionPropertyComponent;
  let fixture: ComponentFixture<Day5PracticePositionPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticePositionPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticePositionPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
