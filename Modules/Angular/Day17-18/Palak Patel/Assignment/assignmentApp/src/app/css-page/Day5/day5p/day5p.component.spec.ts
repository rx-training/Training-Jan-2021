import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5pComponent } from './day5p.component';

describe('Day5pComponent', () => {
  let component: Day5pComponent;
  let fixture: ComponentFixture<Day5pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
