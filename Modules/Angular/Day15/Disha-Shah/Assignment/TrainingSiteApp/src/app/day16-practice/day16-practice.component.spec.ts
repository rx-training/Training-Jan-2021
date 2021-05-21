import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16PracticeComponent } from './day16-practice.component';

describe('Day16PracticeComponent', () => {
  let component: Day16PracticeComponent;
  let fixture: ComponentFixture<Day16PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
