import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice5Component } from './practice5.component';

describe('Practice5Component', () => {
  let component: Practice5Component;
  let fixture: ComponentFixture<Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
