import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticeOverflowwithhiddenComponent } from './day5-practice-overflowwithhidden.component';

describe('Day5PracticeOverflowwithhiddenComponent', () => {
  let component: Day5PracticeOverflowwithhiddenComponent;
  let fixture: ComponentFixture<Day5PracticeOverflowwithhiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticeOverflowwithhiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticeOverflowwithhiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
