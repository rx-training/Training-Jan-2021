import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19practice6Component } from './day19practice6.component';

describe('Day19practice6Component', () => {
  let component: Day19practice6Component;
  let fixture: ComponentFixture<Day19practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19practice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
