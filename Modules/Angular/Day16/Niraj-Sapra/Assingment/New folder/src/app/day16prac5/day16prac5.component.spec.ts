import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16prac5Component } from './day16prac5.component';

describe('Day16prac5Component', () => {
  let component: Day16prac5Component;
  let fixture: ComponentFixture<Day16prac5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16prac5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16prac5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
