import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16practice5Component } from './day16practice5.component';

describe('Day16practice5Component', () => {
  let component: Day16practice5Component;
  let fixture: ComponentFixture<Day16practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
