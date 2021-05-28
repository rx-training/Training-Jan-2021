import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16DateComponent } from './day16-date.component';

describe('Day16DateComponent', () => {
  let component: Day16DateComponent;
  let fixture: ComponentFixture<Day16DateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16DateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
