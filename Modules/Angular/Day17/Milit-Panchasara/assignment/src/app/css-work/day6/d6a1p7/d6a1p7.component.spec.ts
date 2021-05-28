import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D6a1p7Component } from './d6a1p7.component';

describe('D6a1p7Component', () => {
  let component: D6a1p7Component;
  let fixture: ComponentFixture<D6a1p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D6a1p7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D6a1p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
