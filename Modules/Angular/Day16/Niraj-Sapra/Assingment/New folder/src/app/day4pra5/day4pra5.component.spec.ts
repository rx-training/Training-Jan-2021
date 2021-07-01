import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4pra5Component } from './day4pra5.component';

describe('Day4pra5Component', () => {
  let component: Day4pra5Component;
  let fixture: ComponentFixture<Day4pra5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4pra5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4pra5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
