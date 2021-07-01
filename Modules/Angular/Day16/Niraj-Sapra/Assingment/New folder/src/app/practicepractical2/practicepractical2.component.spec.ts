import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicepractical2Component } from './practicepractical2.component';

describe('Practicepractical2Component', () => {
  let component: Practicepractical2Component;
  let fixture: ComponentFixture<Practicepractical2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practicepractical2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practicepractical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
