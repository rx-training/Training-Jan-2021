import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19Practice1Component } from './day19-practice1.component';

describe('Day19Practice1Component', () => {
  let component: Day19Practice1Component;
  let fixture: ComponentFixture<Day19Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
