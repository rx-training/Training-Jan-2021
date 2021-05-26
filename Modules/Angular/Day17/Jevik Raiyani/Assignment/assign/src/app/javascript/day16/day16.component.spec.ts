import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Component } from './day16.component';

describe('Day16Component', () => {
  let component: Day16Component;
  let fixture: ComponentFixture<Day16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
