import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budegt2021Component } from './budegt2021.component';

describe('Budegt2021Component', () => {
  let component: Budegt2021Component;
  let fixture: ComponentFixture<Budegt2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Budegt2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Budegt2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
