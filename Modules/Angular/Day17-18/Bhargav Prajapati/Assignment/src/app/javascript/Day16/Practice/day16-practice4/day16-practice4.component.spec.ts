import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Practice4Component } from './day16-practice4.component';

describe('Day16Practice4Component', () => {
  let component: Day16Practice4Component;
  let fixture: ComponentFixture<Day16Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
