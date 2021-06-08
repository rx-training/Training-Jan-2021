import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17assignmentComponent } from './day17assignment.component';

describe('Day17assignmentComponent', () => {
  let component: Day17assignmentComponent;
  let fixture: ComponentFixture<Day17assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
