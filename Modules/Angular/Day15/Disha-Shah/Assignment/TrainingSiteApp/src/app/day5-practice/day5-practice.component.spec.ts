import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticeComponent } from './day5-practice.component';

describe('Day5PracticeComponent', () => {
  let component: Day5PracticeComponent;
  let fixture: ComponentFixture<Day5PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
