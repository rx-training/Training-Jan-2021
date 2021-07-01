import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4VideosExcerciseComponent } from './day4-videos-excercise.component';

describe('Day4VideosExcerciseComponent', () => {
  let component: Day4VideosExcerciseComponent;
  let fixture: ComponentFixture<Day4VideosExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4VideosExcerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4VideosExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
