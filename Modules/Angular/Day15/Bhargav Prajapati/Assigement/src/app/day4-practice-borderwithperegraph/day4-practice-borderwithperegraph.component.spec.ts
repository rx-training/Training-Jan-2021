import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4PracticeBorderwithperegraphComponent } from './day4-practice-borderwithperegraph.component';

describe('Day4PracticeBorderwithperegraphComponent', () => {
  let component: Day4PracticeBorderwithperegraphComponent;
  let fixture: ComponentFixture<Day4PracticeBorderwithperegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4PracticeBorderwithperegraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4PracticeBorderwithperegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
