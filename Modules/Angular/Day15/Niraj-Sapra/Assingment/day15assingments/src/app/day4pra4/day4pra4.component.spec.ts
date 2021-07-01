import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4pra4Component } from './day4pra4.component';

describe('Day4pra4Component', () => {
  let component: Day4pra4Component;
  let fixture: ComponentFixture<Day4pra4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4pra4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4pra4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
