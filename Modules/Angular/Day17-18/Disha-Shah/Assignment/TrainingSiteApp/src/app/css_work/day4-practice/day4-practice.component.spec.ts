import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4PracticeComponent } from './day4-practice.component';

describe('Day4PracticeComponent', () => {
  let component: Day4PracticeComponent;
  let fixture: ComponentFixture<Day4PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
