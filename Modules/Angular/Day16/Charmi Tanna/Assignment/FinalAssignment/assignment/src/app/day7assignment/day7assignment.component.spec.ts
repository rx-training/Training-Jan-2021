import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7assignmentComponent } from './day7assignment.component';

describe('Day7assignmentComponent', () => {
  let component: Day7assignmentComponent;
  let fixture: ComponentFixture<Day7assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
