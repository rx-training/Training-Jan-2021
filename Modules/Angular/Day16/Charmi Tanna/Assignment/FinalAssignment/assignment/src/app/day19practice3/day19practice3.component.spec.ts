import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19practice3Component } from './day19practice3.component';

describe('Day19practice3Component', () => {
  let component: Day19practice3Component;
  let fixture: ComponentFixture<Day19practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
