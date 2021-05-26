import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticHrDepartmentComponent } from './day3-practic-hr-department.component';

describe('Day3PracticHrDepartmentComponent', () => {
  let component: Day3PracticHrDepartmentComponent;
  let fixture: ComponentFixture<Day3PracticHrDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticHrDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticHrDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
