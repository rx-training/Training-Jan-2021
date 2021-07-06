import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3aComponent } from './day3a.component';

describe('Day3aComponent', () => {
  let component: Day3aComponent;
  let fixture: ComponentFixture<Day3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
