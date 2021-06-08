import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19practice2Component } from './day19practice2.component';

describe('Day19practice2Component', () => {
  let component: Day19practice2Component;
  let fixture: ComponentFixture<Day19practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
