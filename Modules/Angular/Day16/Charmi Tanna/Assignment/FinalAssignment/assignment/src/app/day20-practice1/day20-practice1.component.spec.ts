import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20Practice1Component } from './day20-practice1.component';

describe('Day20Practice1Component', () => {
  let component: Day20Practice1Component;
  let fixture: ComponentFixture<Day20Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
