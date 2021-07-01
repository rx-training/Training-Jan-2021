import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Practice2Component } from './day16-practice2.component';

describe('Day16Practice2Component', () => {
  let component: Day16Practice2Component;
  let fixture: ComponentFixture<Day16Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
