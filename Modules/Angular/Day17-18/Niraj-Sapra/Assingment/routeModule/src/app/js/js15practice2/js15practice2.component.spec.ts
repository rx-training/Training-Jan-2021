import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js15practice2Component } from './js15practice2.component';

describe('Js15practice2Component', () => {
  let component: Js15practice2Component;
  let fixture: ComponentFixture<Js15practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js15practice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js15practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
