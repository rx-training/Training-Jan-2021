import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D5a1Component } from './d5a1.component';

describe('D5a1Component', () => {
  let component: D5a1Component;
  let fixture: ComponentFixture<D5a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D5a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D5a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
