import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D18pe1Component } from './d18pe1.component';

describe('D18pe1Component', () => {
  let component: D18pe1Component;
  let fixture: ComponentFixture<D18pe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D18pe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D18pe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
