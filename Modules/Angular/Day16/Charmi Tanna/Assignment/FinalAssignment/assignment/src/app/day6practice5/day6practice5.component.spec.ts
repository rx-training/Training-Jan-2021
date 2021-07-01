import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6practice5Component } from './day6practice5.component';

describe('Day6practice5Component', () => {
  let component: Day6practice5Component;
  let fixture: ComponentFixture<Day6practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
