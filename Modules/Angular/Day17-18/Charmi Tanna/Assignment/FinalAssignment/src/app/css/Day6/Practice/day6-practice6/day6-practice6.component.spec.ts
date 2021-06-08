import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Practice6Component } from './day6-practice6.component';

describe('Day6Practice6Component', () => {
  let component: Day6Practice6Component;
  let fixture: ComponentFixture<Day6Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Practice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
