import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18aComponent } from './day18a.component';

describe('Day18aComponent', () => {
  let component: Day18aComponent;
  let fixture: ComponentFixture<Day18aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
