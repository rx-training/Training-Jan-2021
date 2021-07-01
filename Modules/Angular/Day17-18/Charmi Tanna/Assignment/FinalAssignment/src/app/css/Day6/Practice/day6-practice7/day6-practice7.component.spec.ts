import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Practice7Component } from './day6-practice7.component';

describe('Day6Practice7Component', () => {
  let component: Day6Practice7Component;
  let fixture: ComponentFixture<Day6Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Practice7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
