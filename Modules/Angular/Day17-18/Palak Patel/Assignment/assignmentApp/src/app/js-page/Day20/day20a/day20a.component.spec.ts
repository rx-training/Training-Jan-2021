import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20aComponent } from './day20a.component';

describe('Day20aComponent', () => {
  let component: Day20aComponent;
  let fixture: ComponentFixture<Day20aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
