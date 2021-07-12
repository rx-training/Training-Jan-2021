import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16pComponent } from './day16p.component';

describe('Day16pComponent', () => {
  let component: Day16pComponent;
  let fixture: ComponentFixture<Day16pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16pComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
