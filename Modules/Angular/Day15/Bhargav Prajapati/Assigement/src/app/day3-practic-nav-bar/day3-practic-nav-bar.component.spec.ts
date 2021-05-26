import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PracticNavBarComponent } from './day3-practic-nav-bar.component';

describe('Day3PracticNavBarComponent', () => {
  let component: Day3PracticNavBarComponent;
  let fixture: ComponentFixture<Day3PracticNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PracticNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PracticNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
