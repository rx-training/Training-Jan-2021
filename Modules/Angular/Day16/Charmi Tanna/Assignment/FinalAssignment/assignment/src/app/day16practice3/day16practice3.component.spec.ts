import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16practice3Component } from './day16practice3.component';

describe('Day16practice3Component', () => {
  let component: Day16practice3Component;
  let fixture: ComponentFixture<Day16practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
