import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatproperyComponent } from './floatpropery.component';

describe('FloatproperyComponent', () => {
  let component: FloatproperyComponent;
  let fixture: ComponentFixture<FloatproperyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatproperyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatproperyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
