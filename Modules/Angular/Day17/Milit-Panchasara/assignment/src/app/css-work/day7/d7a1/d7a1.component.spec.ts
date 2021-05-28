import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D7a1Component } from './d7a1.component';

describe('D7a1Component', () => {
  let component: D7a1Component;
  let fixture: ComponentFixture<D7a1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D7a1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D7a1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
