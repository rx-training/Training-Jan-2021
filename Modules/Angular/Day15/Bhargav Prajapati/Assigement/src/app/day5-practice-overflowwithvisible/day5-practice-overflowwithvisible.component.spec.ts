import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticeOverflowwithvisibleComponent } from './day5-practice-overflowwithvisible.component';

describe('Day5PracticeOverflowwithvisibleComponent', () => {
  let component: Day5PracticeOverflowwithvisibleComponent;
  let fixture: ComponentFixture<Day5PracticeOverflowwithvisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticeOverflowwithvisibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticeOverflowwithvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
