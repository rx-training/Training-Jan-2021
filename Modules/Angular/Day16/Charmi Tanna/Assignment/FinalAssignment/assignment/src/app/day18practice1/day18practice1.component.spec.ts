import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18practice1Component } from './day18practice1.component';

describe('Day18practice1Component', () => {
  let component: Day18practice1Component;
  let fixture: ComponentFixture<Day18practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
