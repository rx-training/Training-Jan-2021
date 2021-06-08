import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18practice3Component } from './day18practice3.component';

describe('Day18practice3Component', () => {
  let component: Day18practice3Component;
  let fixture: ComponentFixture<Day18practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
