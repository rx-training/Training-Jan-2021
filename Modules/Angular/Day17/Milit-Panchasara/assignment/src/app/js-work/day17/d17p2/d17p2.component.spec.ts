import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D17p2Component } from './d17p2.component';

describe('D17p2Component', () => {
  let component: D17p2Component;
  let fixture: ComponentFixture<D17p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D17p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D17p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
