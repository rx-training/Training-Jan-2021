import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3practicalsComponent } from './day3practicals.component';

describe('Day3practicalsComponent', () => {
  let component: Day3practicalsComponent;
  let fixture: ComponentFixture<Day3practicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3practicalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3practicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
