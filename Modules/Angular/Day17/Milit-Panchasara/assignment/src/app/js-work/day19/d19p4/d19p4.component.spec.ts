import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D19p4Component } from './d19p4.component';

describe('D19p4Component', () => {
  let component: D19p4Component;
  let fixture: ComponentFixture<D19p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D19p4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D19p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
