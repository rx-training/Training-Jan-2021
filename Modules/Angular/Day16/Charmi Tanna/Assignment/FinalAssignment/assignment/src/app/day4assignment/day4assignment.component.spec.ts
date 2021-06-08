import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4assignmentComponent } from './day4assignment.component';

describe('Day4assignmentComponent', () => {
  let component: Day4assignmentComponent;
  let fixture: ComponentFixture<Day4assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
