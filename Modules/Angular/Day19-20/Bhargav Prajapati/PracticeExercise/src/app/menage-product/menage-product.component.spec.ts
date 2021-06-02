import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageProductComponent } from './menage-product.component';

describe('MenageProductComponent', () => {
  let component: MenageProductComponent;
  let fixture: ComponentFixture<MenageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenageProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
