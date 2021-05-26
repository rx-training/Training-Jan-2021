import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice7Component } from './practice7.component';

describe('Practice7Component', () => {
  let component: Practice7Component;
  let fixture: ComponentFixture<Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
