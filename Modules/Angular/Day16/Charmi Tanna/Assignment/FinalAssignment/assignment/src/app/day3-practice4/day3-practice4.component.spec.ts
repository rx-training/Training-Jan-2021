import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Practice4Component } from './day3-practice4.component';

describe('Day3Practice4Component', () => {
  let component: Day3Practice4Component;
  let fixture: ComponentFixture<Day3Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
