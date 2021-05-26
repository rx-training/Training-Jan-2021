import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D6p56Component } from './d6p56.component';

describe('D6p56Component', () => {
  let component: D6p56Component;
  let fixture: ComponentFixture<D6p56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D6p56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D6p56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
