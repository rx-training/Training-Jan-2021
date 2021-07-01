import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6practice6Component } from './day6practice6.component';

describe('Day6practice6Component', () => {
  let component: Day6practice6Component;
  let fixture: ComponentFixture<Day6practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6practice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
