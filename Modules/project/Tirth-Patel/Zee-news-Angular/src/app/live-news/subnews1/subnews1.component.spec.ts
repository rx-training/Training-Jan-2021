import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subnews1Component } from './subnews1.component';

describe('Subnews1Component', () => {
  let component: Subnews1Component;
  let fixture: ComponentFixture<Subnews1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subnews1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subnews1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
