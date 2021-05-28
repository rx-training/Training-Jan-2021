import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticeContactComponent } from './day3-practice-contact.component';

describe('Day3PracticeContactComponent', () => {
  let component: Day3PracticeContactComponent;
  let fixture: ComponentFixture<Day3PracticeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
