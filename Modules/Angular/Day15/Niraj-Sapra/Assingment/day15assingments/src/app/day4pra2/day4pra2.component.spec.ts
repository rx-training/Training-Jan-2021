import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4pra2Component } from './day4pra2.component';

describe('Day4pra2Component', () => {
  let component: Day4pra2Component;
  let fixture: ComponentFixture<Day4pra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4pra2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4pra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
