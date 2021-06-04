import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderSourceComponent } from './rider-source.component';

describe('RiderSourceComponent', () => {
  let component: RiderSourceComponent;
  let fixture: ComponentFixture<RiderSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
