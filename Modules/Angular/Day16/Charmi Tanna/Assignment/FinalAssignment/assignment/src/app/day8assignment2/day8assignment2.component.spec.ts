import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8assignment2Component } from './day8assignment2.component';

describe('Day8assignment2Component', () => {
  let component: Day8assignment2Component;
  let fixture: ComponentFixture<Day8assignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8assignment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
