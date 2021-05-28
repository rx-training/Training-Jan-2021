import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Practice2Component } from './day6-practice2.component';

describe('Day6Practice2Component', () => {
  let component: Day6Practice2Component;
  let fixture: ComponentFixture<Day6Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
