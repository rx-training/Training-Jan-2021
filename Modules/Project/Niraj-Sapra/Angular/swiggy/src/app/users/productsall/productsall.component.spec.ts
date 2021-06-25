import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsallComponent } from './productsall.component';

describe('ProductsallComponent', () => {
  let component: ProductsallComponent;
  let fixture: ComponentFixture<ProductsallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
