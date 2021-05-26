import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice3Component } from './practice3.component';

describe('Practice3Component', () => {
  let component: Practice3Component;
  let fixture: ComponentFixture<Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
