import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19practice5Component } from './day19practice5.component';

describe('Day19practice5Component', () => {
  let component: Day19practice5Component;
  let fixture: ComponentFixture<Day19practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
