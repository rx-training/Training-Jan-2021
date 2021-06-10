import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6practice2Component } from './day6practice2.component';

describe('Day6practice2Component', () => {
  let component: Day6practice2Component;
  let fixture: ComponentFixture<Day6practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
