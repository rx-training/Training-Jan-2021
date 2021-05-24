import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4assignmentPortfolioComponent } from './day4assignment-portfolio.component';

describe('Day4assignmentPortfolioComponent', () => {
  let component: Day4assignmentPortfolioComponent;
  let fixture: ComponentFixture<Day4assignmentPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4assignmentPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4assignmentPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
