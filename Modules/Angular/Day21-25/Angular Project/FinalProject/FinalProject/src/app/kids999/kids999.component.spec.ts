import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kids999Component } from './kids999.component';

describe('Kids999Component', () => {
  let component: Kids999Component;
  let fixture: ComponentFixture<Kids999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kids999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kids999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
