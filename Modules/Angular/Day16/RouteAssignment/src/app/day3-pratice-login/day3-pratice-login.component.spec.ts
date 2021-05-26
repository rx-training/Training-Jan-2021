import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PraticeLoginComponent } from './day3-pratice-login.component';

describe('Day3PraticeLoginComponent', () => {
  let component: Day3PraticeLoginComponent;
  let fixture: ComponentFixture<Day3PraticeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3PraticeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3PraticeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
