import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8pComponent } from './day8p.component';

describe('Day8pComponent', () => {
  let component: Day8pComponent;
  let fixture: ComponentFixture<Day8pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day8pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
