import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayassignmentComponent } from './dayassignment.component';

describe('DayassignmentComponent', () => {
  let component: DayassignmentComponent;
  let fixture: ComponentFixture<DayassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
