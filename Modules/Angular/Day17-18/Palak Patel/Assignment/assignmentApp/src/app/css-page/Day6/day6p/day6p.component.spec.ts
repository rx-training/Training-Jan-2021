import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6pComponent } from './day6p.component';

describe('Day6pComponent', () => {
  let component: Day6pComponent;
  let fixture: ComponentFixture<Day6pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
