import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16ArrayComponent } from './day16-array.component';

describe('Day16ArrayComponent', () => {
  let component: Day16ArrayComponent;
  let fixture: ComponentFixture<Day16ArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16ArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16ArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
