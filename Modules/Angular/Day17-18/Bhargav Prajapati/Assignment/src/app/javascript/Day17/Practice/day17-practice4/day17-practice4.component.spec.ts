import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice4Component } from './day17-practice4.component';

describe('Day17Practice4Component', () => {
  let component: Day17Practice4Component;
  let fixture: ComponentFixture<Day17Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
