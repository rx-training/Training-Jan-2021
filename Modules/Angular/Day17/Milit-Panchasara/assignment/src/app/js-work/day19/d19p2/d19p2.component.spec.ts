import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D19p2Component } from './d19p2.component';

describe('D19p2Component', () => {
  let component: D19p2Component;
  let fixture: ComponentFixture<D19p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D19p2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D19p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
