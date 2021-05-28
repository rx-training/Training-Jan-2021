import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20Practice2Component } from './day20-practice2.component';

describe('Day20Practice2Component', () => {
  let component: Day20Practice2Component;
  let fixture: ComponentFixture<Day20Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
