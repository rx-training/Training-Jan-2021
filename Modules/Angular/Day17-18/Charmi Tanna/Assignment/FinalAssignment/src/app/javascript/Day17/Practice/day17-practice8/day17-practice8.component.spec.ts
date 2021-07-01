import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice8Component } from './day17-practice8.component';

describe('Day17Practice8Component', () => {
  let component: Day17Practice8Component;
  let fixture: ComponentFixture<Day17Practice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
