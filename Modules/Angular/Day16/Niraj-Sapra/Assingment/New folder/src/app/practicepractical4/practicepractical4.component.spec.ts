import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicepractical4Component } from './practicepractical4.component';

describe('Practicepractical4Component', () => {
  let component: Practicepractical4Component;
  let fixture: ComponentFixture<Practicepractical4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practicepractical4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practicepractical4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
