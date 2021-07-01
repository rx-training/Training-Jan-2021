import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15assignmentComponent } from './day15assignment.component';

describe('Day15assignmentComponent', () => {
  let component: Day15assignmentComponent;
  let fixture: ComponentFixture<Day15assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
