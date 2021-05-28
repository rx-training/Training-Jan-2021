import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe3Component } from './d15pe3.component';

describe('D15pe3Component', () => {
  let component: D15pe3Component;
  let fixture: ComponentFixture<D15pe3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
