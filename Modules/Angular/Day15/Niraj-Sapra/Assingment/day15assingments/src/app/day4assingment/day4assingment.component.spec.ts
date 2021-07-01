import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4assingmentComponent } from './day4assingment.component';

describe('Day4assingmentComponent', () => {
  let component: Day4assingmentComponent;
  let fixture: ComponentFixture<Day4assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
