import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D18p2Component } from './d18p2.component';

describe('D18p2Component', () => {
  let component: D18p2Component;
  let fixture: ComponentFixture<D18p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D18p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D18p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
