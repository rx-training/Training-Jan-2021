import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Practice6Component } from './day19-practice6.component';

describe('Day19Practice6Component', () => {
  let component: Day19Practice6Component;
  let fixture: ComponentFixture<Day19Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19Practice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
