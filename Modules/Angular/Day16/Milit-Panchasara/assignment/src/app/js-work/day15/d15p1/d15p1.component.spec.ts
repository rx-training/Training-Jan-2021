import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15p1Component } from './d15p1.component';

describe('D15p1Component', () => {
  let component: D15p1Component;
  let fixture: ComponentFixture<D15p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
