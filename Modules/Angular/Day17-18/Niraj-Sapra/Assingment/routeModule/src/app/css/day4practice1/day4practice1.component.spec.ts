import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4practice1Component } from './day4practice1.component';

describe('Day4practice1Component', () => {
  let component: Day4practice1Component;
  let fixture: ComponentFixture<Day4practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
