import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDataComponent } from './value-data.component';

describe('ValueDataComponent', () => {
  let component: ValueDataComponent;
  let fixture: ComponentFixture<ValueDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
