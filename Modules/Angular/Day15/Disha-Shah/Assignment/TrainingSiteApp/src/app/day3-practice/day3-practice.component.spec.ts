import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticeComponent } from './day3-practice.component';

describe('Day3PracticeComponent', () => {
  let component: Day3PracticeComponent;
  let fixture: ComponentFixture<Day3PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
