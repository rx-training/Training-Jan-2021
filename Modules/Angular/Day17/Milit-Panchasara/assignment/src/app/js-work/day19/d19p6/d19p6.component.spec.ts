import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D19p6Component } from './d19p6.component';

describe('D19p6Component', () => {
  let component: D19p6Component;
  let fixture: ComponentFixture<D19p6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D19p6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D19p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
