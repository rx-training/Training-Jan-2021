import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecComponent } from './product-spec.component';

describe('ProductSpecComponent', () => {
  let component: ProductSpecComponent;
  let fixture: ComponentFixture<ProductSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
