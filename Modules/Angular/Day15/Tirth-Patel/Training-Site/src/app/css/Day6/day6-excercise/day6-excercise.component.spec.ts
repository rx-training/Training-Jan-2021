import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ExcerciseComponent } from './day6-excercise.component';

describe('Day6ExcerciseComponent', () => {
  let component: Day6ExcerciseComponent;
  let fixture: ComponentFixture<Day6ExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
