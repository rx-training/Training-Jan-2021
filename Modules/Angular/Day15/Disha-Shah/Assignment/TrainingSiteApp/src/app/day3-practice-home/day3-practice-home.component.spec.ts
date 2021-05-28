import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticeHomeComponent } from './day3-practice-home.component';

describe('Day3PracticeHomeComponent', () => {
  let component: Day3PracticeHomeComponent;
  let fixture: ComponentFixture<Day3PracticeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
