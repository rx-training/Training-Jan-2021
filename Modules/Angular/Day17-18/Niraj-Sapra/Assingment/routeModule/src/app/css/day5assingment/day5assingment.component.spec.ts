import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5assingmentComponent } from './day5assingment.component';

describe('Day5assingmentComponent', () => {
  let component: Day5assingmentComponent;
  let fixture: ComponentFixture<Day5assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
