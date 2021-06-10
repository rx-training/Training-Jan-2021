import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6assignmentComponent } from './day6assignment.component';

describe('Day6assignmentComponent', () => {
  let component: Day6assignmentComponent;
  let fixture: ComponentFixture<Day6assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
