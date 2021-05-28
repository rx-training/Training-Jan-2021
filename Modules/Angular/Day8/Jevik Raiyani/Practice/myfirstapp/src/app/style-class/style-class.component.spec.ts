import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleClassComponent } from './style-class.component';

describe('StyleClassComponent', () => {
  let component: StyleClassComponent;
  let fixture: ComponentFixture<StyleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
