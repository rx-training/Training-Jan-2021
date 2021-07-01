import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice9Component } from './day17-practice9.component';

describe('Day17Practice9Component', () => {
  let component: Day17Practice9Component;
  let fixture: ComponentFixture<Day17Practice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
