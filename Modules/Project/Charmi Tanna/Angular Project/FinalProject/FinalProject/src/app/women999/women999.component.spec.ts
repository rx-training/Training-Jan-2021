import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women999Component } from './women999.component';

describe('Women999Component', () => {
  let component: Women999Component;
  let fixture: ComponentFixture<Women999Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Women999Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Women999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
