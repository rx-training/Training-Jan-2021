import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js15practice1Component } from './js15practice1.component';

describe('Js15practice1Component', () => {
  let component: Js15practice1Component;
  let fixture: ComponentFixture<Js15practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js15practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js15practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
