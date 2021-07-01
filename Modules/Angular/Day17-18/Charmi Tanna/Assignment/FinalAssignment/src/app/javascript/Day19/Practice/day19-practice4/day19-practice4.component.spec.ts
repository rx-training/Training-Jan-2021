import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Practice4Component } from './day19-practice4.component';

describe('Day19Practice4Component', () => {
  let component: Day19Practice4Component;
  let fixture: ComponentFixture<Day19Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19Practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
