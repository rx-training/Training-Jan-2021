import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Practice4Component } from './day7-practice4.component';

describe('Day7Practice4Component', () => {
  let component: Day7Practice4Component;
  let fixture: ComponentFixture<Day7Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
