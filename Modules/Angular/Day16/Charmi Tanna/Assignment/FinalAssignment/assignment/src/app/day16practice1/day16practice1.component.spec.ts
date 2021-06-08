import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16practice1Component } from './day16practice1.component';

describe('Day16practice1Component', () => {
  let component: Day16practice1Component;
  let fixture: ComponentFixture<Day16practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
