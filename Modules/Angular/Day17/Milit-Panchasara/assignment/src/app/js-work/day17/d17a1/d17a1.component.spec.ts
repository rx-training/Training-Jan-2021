import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D17a1Component } from './d17a1.component';

describe('D17a1Component', () => {
  let component: D17a1Component;
  let fixture: ComponentFixture<D17a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D17a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D17a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
