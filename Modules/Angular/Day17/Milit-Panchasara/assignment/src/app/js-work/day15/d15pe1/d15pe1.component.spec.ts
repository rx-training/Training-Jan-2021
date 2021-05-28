import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D15pe1Component } from './d15pe1.component';

describe('D15pe1Component', () => {
  let component: D15pe1Component;
  let fixture: ComponentFixture<D15pe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D15pe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D15pe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
