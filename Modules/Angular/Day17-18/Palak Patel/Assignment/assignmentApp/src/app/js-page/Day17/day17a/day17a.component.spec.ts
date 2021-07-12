import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17aComponent } from './day17a.component';

describe('Day17aComponent', () => {
  let component: Day17aComponent;
  let fixture: ComponentFixture<Day17aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
