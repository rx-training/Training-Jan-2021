import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe2Component } from './d15pe2.component';

describe('D15pe2Component', () => {
  let component: D15pe2Component;
  let fixture: ComponentFixture<D15pe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
