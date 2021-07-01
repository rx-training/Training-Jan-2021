import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16prac4Component } from './day16prac4.component';

describe('Day16prac4Component', () => {
  let component: Day16prac4Component;
  let fixture: ComponentFixture<Day16prac4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16prac4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16prac4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
