import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D19p3Component } from './d19p3.component';

describe('D19p3Component', () => {
  let component: D19p3Component;
  let fixture: ComponentFixture<D19p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D19p3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D19p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
