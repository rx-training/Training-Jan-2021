import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4PracticeTaskComponent } from './day4-practice-task.component';

describe('Day4PracticeTaskComponent', () => {
  let component: Day4PracticeTaskComponent;
  let fixture: ComponentFixture<Day4PracticeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4PracticeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4PracticeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
