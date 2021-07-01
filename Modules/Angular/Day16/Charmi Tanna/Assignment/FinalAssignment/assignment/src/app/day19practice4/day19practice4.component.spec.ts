import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19practice4Component } from './day19practice4.component';

describe('Day19practice4Component', () => {
  let component: Day19practice4Component;
  let fixture: ComponentFixture<Day19practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
