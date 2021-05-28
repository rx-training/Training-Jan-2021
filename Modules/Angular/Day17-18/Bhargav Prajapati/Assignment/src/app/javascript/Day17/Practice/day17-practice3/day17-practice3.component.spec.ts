import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice3Component } from './day17-practice3.component';

describe('Day17Practice3Component', () => {
  let component: Day17Practice3Component;
  let fixture: ComponentFixture<Day17Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
