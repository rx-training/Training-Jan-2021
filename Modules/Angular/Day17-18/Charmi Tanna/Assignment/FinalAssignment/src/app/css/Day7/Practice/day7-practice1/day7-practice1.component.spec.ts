import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Practice1Component } from './day7-practice1.component';

describe('Day7Practice1Component', () => {
  let component: Day7Practice1Component;
  let fixture: ComponentFixture<Day7Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
