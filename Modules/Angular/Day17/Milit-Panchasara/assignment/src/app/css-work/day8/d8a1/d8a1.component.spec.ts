import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D8a1Component } from './d8a1.component';

describe('D8a1Component', () => {
  let component: D8a1Component;
  let fixture: ComponentFixture<D8a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D8a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D8a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
