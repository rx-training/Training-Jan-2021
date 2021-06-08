import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Practice1Component } from './day3-practice1.component';

describe('Day3Practice1Component', () => {
  let component: Day3Practice1Component;
  let fixture: ComponentFixture<Day3Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
