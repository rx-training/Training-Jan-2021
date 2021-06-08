import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7practice2Component } from './day7practice2.component';

describe('Day7practice2Component', () => {
  let component: Day7practice2Component;
  let fixture: ComponentFixture<Day7practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
