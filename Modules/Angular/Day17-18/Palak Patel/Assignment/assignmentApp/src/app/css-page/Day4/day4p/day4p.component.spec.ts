import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4pComponent } from './day4p.component';

describe('Day4pComponent', () => {
  let component: Day4pComponent;
  let fixture: ComponentFixture<Day4pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
