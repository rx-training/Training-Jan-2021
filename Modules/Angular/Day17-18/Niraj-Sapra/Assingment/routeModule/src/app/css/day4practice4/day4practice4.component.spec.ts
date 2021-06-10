import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4practice4Component } from './day4practice4.component';

describe('Day4practice4Component', () => {
  let component: Day4practice4Component;
  let fixture: ComponentFixture<Day4practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
