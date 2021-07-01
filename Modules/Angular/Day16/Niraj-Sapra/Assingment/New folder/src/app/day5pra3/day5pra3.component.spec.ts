import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5pra3Component } from './day5pra3.component';

describe('Day5pra3Component', () => {
  let component: Day5pra3Component;
  let fixture: ComponentFixture<Day5pra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5pra3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5pra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
