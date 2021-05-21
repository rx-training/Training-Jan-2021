import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7PracticeComponent } from './day7-practice.component';

describe('Day7PracticeComponent', () => {
  let component: Day7PracticeComponent;
  let fixture: ComponentFixture<Day7PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
