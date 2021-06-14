import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderBlockButtonComponent } from './rider-block-button.component';

describe('RiderBlockButtonComponent', () => {
  let component: RiderBlockButtonComponent;
  let fixture: ComponentFixture<RiderBlockButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderBlockButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderBlockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
