import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3pComponent } from './day3p.component';

describe('Day3pComponent', () => {
  let component: Day3pComponent;
  let fixture: ComponentFixture<Day3pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
