import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice8Component } from './practice8.component';

describe('Practice8Component', () => {
  let component: Practice8Component;
  let fixture: ComponentFixture<Practice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
