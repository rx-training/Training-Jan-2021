import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D18p1Component } from './d18p1.component';

describe('D18p1Component', () => {
  let component: D18p1Component;
  let fixture: ComponentFixture<D18p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D18p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D18p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
