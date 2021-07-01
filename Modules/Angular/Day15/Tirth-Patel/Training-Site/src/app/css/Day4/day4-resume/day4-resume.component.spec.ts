import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4ResumeComponent } from './day4-resume.component';

describe('Day4ResumeComponent', () => {
  let component: Day4ResumeComponent;
  let fixture: ComponentFixture<Day4ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4ResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
