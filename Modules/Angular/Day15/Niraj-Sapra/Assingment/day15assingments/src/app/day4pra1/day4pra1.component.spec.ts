import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4pra1Component } from './day4pra1.component';

describe('Day4pra1Component', () => {
  let component: Day4pra1Component;
  let fixture: ComponentFixture<Day4pra1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4pra1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4pra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
