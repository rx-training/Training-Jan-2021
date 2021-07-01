import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Practice5Component } from './day16-practice5.component';

describe('Day16Practice5Component', () => {
  let component: Day16Practice5Component;
  let fixture: ComponentFixture<Day16Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
