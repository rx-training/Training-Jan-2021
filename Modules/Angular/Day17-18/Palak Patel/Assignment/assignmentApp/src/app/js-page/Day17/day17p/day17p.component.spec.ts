import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17pComponent } from './day17p.component';

describe('Day17pComponent', () => {
  let component: Day17pComponent;
  let fixture: ComponentFixture<Day17pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
