import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15Practice1Component } from './day15-practice1.component';

describe('Day15Practice1Component', () => {
  let component: Day15Practice1Component;
  let fixture: ComponentFixture<Day15Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
