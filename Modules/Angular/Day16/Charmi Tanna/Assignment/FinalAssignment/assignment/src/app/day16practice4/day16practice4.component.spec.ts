import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16practice4Component } from './day16practice4.component';

describe('Day16practice4Component', () => {
  let component: Day16practice4Component;
  let fixture: ComponentFixture<Day16practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
