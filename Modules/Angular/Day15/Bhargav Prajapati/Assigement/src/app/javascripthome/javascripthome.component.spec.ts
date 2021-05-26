import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JAVASCRIPTHOMEComponent } from './javascripthome.component';

describe('JAVASCRIPTHOMEComponent', () => {
  let component: JAVASCRIPTHOMEComponent;
  let fixture: ComponentFixture<JAVASCRIPTHOMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JAVASCRIPTHOMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JAVASCRIPTHOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
