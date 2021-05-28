import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D18p3Component } from './d18p3.component';

describe('D18p3Component', () => {
  let component: D18p3Component;
  let fixture: ComponentFixture<D18p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D18p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D18p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
