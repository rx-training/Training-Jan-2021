import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4practice2Component } from './day4practice2.component';

describe('Day4practice2Component', () => {
  let component: Day4practice2Component;
  let fixture: ComponentFixture<Day4practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
