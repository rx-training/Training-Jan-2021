import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice13Component } from './practice13.component';

describe('Practice13Component', () => {
  let component: Practice13Component;
  let fixture: ComponentFixture<Practice13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
