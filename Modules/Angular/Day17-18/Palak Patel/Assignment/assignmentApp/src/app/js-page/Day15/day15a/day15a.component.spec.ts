import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15aComponent } from './day15a.component';

describe('Day15aComponent', () => {
  let component: Day15aComponent;
  let fixture: ComponentFixture<Day15aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
