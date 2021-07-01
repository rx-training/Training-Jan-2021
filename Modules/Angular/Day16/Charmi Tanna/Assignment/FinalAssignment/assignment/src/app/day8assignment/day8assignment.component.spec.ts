import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8assignmentComponent } from './day8assignment.component';

describe('Day8assignmentComponent', () => {
  let component: Day8assignmentComponent;
  let fixture: ComponentFixture<Day8assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
