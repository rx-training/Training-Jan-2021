import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D19p1Component } from './d19p1.component';

describe('D19p1Component', () => {
  let component: D19p1Component;
  let fixture: ComponentFixture<D19p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D19p1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D19p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
