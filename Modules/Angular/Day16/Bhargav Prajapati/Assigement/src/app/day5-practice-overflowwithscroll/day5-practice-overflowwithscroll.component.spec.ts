import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticeOverflowwithscrollComponent } from './day5-practice-overflowwithscroll.component';

describe('Day5PracticeOverflowwithscrollComponent', () => {
  let component: Day5PracticeOverflowwithscrollComponent;
  let fixture: ComponentFixture<Day5PracticeOverflowwithscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticeOverflowwithscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticeOverflowwithscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
