import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Practice5Component } from './day6-practice5.component';

describe('Day6Practice5Component', () => {
  let component: Day6Practice5Component;
  let fixture: ComponentFixture<Day6Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
