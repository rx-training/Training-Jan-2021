import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4UnivarsalPropertyComponent } from './day4-univarsal-property.component';

describe('Day4UnivarsalPropertyComponent', () => {
  let component: Day4UnivarsalPropertyComponent;
  let fixture: ComponentFixture<Day4UnivarsalPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4UnivarsalPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4UnivarsalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
