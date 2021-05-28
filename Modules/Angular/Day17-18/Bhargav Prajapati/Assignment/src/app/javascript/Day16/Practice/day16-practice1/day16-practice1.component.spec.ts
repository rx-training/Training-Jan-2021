import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Practice1Component } from './day16-practice1.component';

describe('Day16Practice1Component', () => {
  let component: Day16Practice1Component;
  let fixture: ComponentFixture<Day16Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
