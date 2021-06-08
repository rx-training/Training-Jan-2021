import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Practice5Component } from './day3-practice5.component';

describe('Day3Practice5Component', () => {
  let component: Day3Practice5Component;
  let fixture: ComponentFixture<Day3Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
