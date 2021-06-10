import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4pra3Component } from './day4pra3.component';

describe('Day4pra3Component', () => {
  let component: Day4pra3Component;
  let fixture: ComponentFixture<Day4pra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4pra3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4pra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
