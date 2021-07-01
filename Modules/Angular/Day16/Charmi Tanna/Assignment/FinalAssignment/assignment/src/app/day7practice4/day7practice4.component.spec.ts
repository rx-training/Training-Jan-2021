import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7practice4Component } from './day7practice4.component';

describe('Day7practice4Component', () => {
  let component: Day7practice4Component;
  let fixture: ComponentFixture<Day7practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
