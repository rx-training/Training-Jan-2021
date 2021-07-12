import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18pComponent } from './day18p.component';

describe('Day18pComponent', () => {
  let component: Day18pComponent;
  let fixture: ComponentFixture<Day18pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
