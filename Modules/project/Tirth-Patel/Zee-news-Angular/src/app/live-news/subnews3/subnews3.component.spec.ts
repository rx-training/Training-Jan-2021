import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subnews3Component } from './subnews3.component';

describe('Subnews3Component', () => {
  let component: Subnews3Component;
  let fixture: ComponentFixture<Subnews3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subnews3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subnews3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
