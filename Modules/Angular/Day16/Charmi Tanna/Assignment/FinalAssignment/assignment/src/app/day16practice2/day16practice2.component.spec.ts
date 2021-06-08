import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16practice2Component } from './day16practice2.component';

describe('Day16practice2Component', () => {
  let component: Day16practice2Component;
  let fixture: ComponentFixture<Day16practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
