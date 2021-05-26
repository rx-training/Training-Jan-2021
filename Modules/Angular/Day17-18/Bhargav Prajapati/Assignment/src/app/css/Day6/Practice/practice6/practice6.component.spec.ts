import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice6Component } from './practice6.component';

describe('Practice6Component', () => {
  let component: Practice6Component;
  let fixture: ComponentFixture<Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
