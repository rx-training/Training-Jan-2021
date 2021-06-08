import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Practice3Component } from './day16-practice3.component';

describe('Day16Practice3Component', () => {
  let component: Day16Practice3Component;
  let fixture: ComponentFixture<Day16Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
