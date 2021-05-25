import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20PracticeComponent } from './day20-practice.component';

describe('Day20PracticeComponent', () => {
  let component: Day20PracticeComponent;
  let fixture: ComponentFixture<Day20PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20PracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
