import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsReservedComponent } from './rights-reserved.component';

describe('RightsReservedComponent', () => {
  let component: RightsReservedComponent;
  let fixture: ComponentFixture<RightsReservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightsReservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
