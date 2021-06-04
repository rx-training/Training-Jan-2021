import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderHomeComponent } from './rider-home.component';

describe('RiderHomeComponent', () => {
  let component: RiderHomeComponent;
  let fixture: ComponentFixture<RiderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
