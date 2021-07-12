import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4aComponent } from './day4a.component';

describe('Day4aComponent', () => {
  let component: Day4aComponent;
  let fixture: ComponentFixture<Day4aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
