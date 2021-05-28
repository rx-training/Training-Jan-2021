import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Practice1Component } from './day6-practice1.component';

describe('Day6Practice1Component', () => {
  let component: Day6Practice1Component;
  let fixture: ComponentFixture<Day6Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
