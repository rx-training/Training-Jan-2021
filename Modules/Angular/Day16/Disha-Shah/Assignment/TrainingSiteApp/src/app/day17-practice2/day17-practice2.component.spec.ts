import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice2Component } from './day17-practice2.component';

describe('Day17Practice2Component', () => {
  let component: Day17Practice2Component;
  let fixture: ComponentFixture<Day17Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
