import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5practice4Component } from './day5practice4.component';

describe('Day5practice4Component', () => {
  let component: Day5practice4Component;
  let fixture: ComponentFixture<Day5practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
