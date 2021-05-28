import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D17p1Component } from './d17p1.component';

describe('D17p1Component', () => {
  let component: D17p1Component;
  let fixture: ComponentFixture<D17p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D17p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D17p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
