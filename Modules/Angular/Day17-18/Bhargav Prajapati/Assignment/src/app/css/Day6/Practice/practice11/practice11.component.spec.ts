import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice11Component } from './practice11.component';

describe('Practice11Component', () => {
  let component: Practice11Component;
  let fixture: ComponentFixture<Practice11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
