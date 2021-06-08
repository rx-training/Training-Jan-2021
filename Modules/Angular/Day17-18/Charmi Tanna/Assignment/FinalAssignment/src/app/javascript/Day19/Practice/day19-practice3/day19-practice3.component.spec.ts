import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Practice3Component } from './day19-practice3.component';

describe('Day19Practice3Component', () => {
  let component: Day19Practice3Component;
  let fixture: ComponentFixture<Day19Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
