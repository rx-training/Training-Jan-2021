import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissionformComponent } from './addmissionform.component';

describe('AddmissionformComponent', () => {
  let component: AddmissionformComponent;
  let fixture: ComponentFixture<AddmissionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmissionformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmissionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
