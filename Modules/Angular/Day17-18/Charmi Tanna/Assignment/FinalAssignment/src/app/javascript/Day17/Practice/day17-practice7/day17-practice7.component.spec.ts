import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice7Component } from './day17-practice7.component';

describe('Day17Practice7Component', () => {
  let component: Day17Practice7Component;
  let fixture: ComponentFixture<Day17Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
