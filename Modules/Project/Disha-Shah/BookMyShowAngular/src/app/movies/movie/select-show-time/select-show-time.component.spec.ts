import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShowTimeComponent } from './select-show-time.component';

describe('SelectShowTimeComponent', () => {
  let component: SelectShowTimeComponent;
  let fixture: ComponentFixture<SelectShowTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectShowTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
