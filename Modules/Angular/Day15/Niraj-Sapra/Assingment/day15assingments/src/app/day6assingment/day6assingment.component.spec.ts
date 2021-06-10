import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6assingmentComponent } from './day6assingment.component';

describe('Day6assingmentComponent', () => {
  let component: Day6assingmentComponent;
  let fixture: ComponentFixture<Day6assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
