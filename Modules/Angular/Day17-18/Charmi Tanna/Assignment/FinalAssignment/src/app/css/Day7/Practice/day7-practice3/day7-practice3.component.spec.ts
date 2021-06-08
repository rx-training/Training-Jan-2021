import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Practice3Component } from './day7-practice3.component';

describe('Day7Practice3Component', () => {
  let component: Day7Practice3Component;
  let fixture: ComponentFixture<Day7Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
