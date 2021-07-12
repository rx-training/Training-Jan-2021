import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5aComponent } from './day5a.component';

describe('Day5aComponent', () => {
  let component: Day5aComponent;
  let fixture: ComponentFixture<Day5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
