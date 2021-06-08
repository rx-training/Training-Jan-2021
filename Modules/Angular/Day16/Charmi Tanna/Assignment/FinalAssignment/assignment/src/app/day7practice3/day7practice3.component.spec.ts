import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7practice3Component } from './day7practice3.component';

describe('Day7practice3Component', () => {
  let component: Day7practice3Component;
  let fixture: ComponentFixture<Day7practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
