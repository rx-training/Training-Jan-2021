import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PraticeDepartmentComponent } from './day3-pratice-department.component';

describe('Day3PraticeDepartmentComponent', () => {
  let component: Day3PraticeDepartmentComponent;
  let fixture: ComponentFixture<Day3PraticeDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PraticeDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PraticeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
