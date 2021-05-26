import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice9Component } from './practice9.component';

describe('Practice9Component', () => {
  let component: Practice9Component;
  let fixture: ComponentFixture<Practice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
