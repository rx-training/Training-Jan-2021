import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice10Component } from './practice10.component';

describe('Practice10Component', () => {
  let component: Practice10Component;
  let fixture: ComponentFixture<Practice10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
