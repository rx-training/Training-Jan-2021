import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D4p1Component } from './d4p1.component';

describe('D4p1Component', () => {
  let component: D4p1Component;
  let fixture: ComponentFixture<D4p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D4p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D4p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
