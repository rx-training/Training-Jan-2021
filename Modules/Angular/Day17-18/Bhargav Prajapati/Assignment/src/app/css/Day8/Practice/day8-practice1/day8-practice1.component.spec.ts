import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8Practice1Component } from './day8-practice1.component';

describe('Day8Practice1Component', () => {
  let component: Day8Practice1Component;
  let fixture: ComponentFixture<Day8Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
