import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18practice2Component } from './day18practice2.component';

describe('Day18practice2Component', () => {
  let component: Day18practice2Component;
  let fixture: ComponentFixture<Day18practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
