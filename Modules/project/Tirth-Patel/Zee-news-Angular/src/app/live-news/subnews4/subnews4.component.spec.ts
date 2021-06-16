import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subnews4Component } from './subnews4.component';

describe('Subnews4Component', () => {
  let component: Subnews4Component;
  let fixture: ComponentFixture<Subnews4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subnews4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subnews4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
