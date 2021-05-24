import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15Practice3Component } from './day15-practice3.component';

describe('Day15Practice3Component', () => {
  let component: Day15Practice3Component;
  let fixture: ComponentFixture<Day15Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
