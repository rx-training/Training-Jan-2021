import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15pComponent } from './day15p.component';

describe('Day15pComponent', () => {
  let component: Day15pComponent;
  let fixture: ComponentFixture<Day15pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
