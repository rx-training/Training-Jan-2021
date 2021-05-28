import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5ExcerciseComponent } from './day5-excercise.component';

describe('Day5ExcerciseComponent', () => {
  let component: Day5ExcerciseComponent;
  let fixture: ComponentFixture<Day5ExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5ExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
