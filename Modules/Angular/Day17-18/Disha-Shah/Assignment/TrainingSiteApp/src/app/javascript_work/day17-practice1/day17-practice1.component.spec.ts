import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17Practice1Component } from './day17-practice1.component';

describe('Day17Practice1Component', () => {
  let component: Day17Practice1Component;
  let fixture: ComponentFixture<Day17Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
