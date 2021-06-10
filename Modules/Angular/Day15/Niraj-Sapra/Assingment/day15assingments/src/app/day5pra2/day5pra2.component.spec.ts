import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5pra2Component } from './day5pra2.component';

describe('Day5pra2Component', () => {
  let component: Day5pra2Component;
  let fixture: ComponentFixture<Day5pra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5pra2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5pra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
