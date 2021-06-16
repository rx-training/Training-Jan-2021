import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subnews2Component } from './subnews2.component';

describe('Subnews2Component', () => {
  let component: Subnews2Component;
  let fixture: ComponentFixture<Subnews2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subnews2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subnews2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
