import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4practice5Component } from './day4practice5.component';

describe('Day4practice5Component', () => {
  let component: Day4practice5Component;
  let fixture: ComponentFixture<Day4practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
