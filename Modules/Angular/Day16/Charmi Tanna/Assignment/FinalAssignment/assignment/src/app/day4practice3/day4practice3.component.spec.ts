import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4practice3Component } from './day4practice3.component';

describe('Day4practice3Component', () => {
  let component: Day4practice3Component;
  let fixture: ComponentFixture<Day4practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
