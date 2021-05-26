import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4UseOfCssComponent } from './day4-use-of-css.component';

describe('Day4UseOfCssComponent', () => {
  let component: Day4UseOfCssComponent;
  let fixture: ComponentFixture<Day4UseOfCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4UseOfCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4UseOfCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
