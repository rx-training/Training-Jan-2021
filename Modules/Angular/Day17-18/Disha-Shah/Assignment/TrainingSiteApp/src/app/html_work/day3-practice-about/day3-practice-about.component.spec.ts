import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticeAboutComponent } from './day3-practice-about.component';

describe('Day3PracticeAboutComponent', () => {
  let component: Day3PracticeAboutComponent;
  let fixture: ComponentFixture<Day3PracticeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
