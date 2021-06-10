import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15assingmentComponent } from './day15assingment.component';

describe('Day15assingmentComponent', () => {
  let component: Day15assingmentComponent;
  let fixture: ComponentFixture<Day15assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
