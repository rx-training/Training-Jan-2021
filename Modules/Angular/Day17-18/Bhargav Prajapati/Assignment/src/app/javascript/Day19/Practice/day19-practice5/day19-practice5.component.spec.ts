import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Practice5Component } from './day19-practice5.component';

describe('Day19Practice5Component', () => {
  let component: Day19Practice5Component;
  let fixture: ComponentFixture<Day19Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19Practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
