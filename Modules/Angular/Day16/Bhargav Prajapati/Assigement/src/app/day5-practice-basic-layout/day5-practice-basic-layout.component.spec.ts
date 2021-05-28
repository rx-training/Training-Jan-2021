import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PracticeBasicLayoutComponent } from './day5-practice-basic-layout.component';

describe('Day5PracticeBasicLayoutComponent', () => {
  let component: Day5PracticeBasicLayoutComponent;
  let fixture: ComponentFixture<Day5PracticeBasicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5PracticeBasicLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5PracticeBasicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
