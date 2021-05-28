import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormscontrolComponent } from './formscontrol.component';

describe('FormscontrolComponent', () => {
  let component: FormscontrolComponent;
  let fixture: ComponentFixture<FormscontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormscontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
