import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D17pe1Component } from './d17pe1.component';

describe('D17pe1Component', () => {
  let component: D17pe1Component;
  let fixture: ComponentFixture<D17pe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D17pe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D17pe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
