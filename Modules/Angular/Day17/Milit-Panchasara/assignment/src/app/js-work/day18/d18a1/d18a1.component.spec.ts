import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D18a1Component } from './d18a1.component';

describe('D18a1Component', () => {
  let component: D18a1Component;
  let fixture: ComponentFixture<D18a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D18a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D18a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
