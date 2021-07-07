import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCostCrudComponent } from './hotel-cost-crud.component';

describe('HotelCostCrudComponent', () => {
  let component: HotelCostCrudComponent;
  let fixture: ComponentFixture<HotelCostCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCostCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCostCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
