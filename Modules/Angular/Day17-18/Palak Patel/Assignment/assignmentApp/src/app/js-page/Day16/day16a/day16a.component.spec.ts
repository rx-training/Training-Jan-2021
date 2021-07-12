import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16aComponent } from './day16a.component';

describe('Day16aComponent', () => {
  let component: Day16aComponent;
  let fixture: ComponentFixture<Day16aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
