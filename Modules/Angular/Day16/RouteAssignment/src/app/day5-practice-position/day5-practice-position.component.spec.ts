import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticePositionComponent } from './day5-practice-position.component';

describe('Day5PracticePositionComponent', () => {
  let component: Day5PracticePositionComponent;
  let fixture: ComponentFixture<Day5PracticePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
