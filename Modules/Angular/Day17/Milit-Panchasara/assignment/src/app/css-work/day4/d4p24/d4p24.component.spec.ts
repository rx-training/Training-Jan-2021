import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D4p24Component } from './d4p24.component';

describe('D4p24Component', () => {
  let component: D4p24Component;
  let fixture: ComponentFixture<D4p24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D4p24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D4p24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
