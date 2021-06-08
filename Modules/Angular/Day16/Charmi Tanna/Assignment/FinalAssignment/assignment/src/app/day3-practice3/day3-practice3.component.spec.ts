import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Practice3Component } from './day3-practice3.component';

describe('Day3Practice3Component', () => {
  let component: Day3Practice3Component;
  let fixture: ComponentFixture<Day3Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
