import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5pra1Component } from './day5pra1.component';

describe('Day5pra1Component', () => {
  let component: Day5pra1Component;
  let fixture: ComponentFixture<Day5pra1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5pra1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5pra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
