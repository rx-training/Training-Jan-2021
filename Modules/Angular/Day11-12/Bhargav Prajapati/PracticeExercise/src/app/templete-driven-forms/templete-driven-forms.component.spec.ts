import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteDrivenFormsComponent } from './templete-driven-forms.component';

describe('TempleteDrivenFormsComponent', () => {
  let component: TempleteDrivenFormsComponent;
  let fixture: ComponentFixture<TempleteDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleteDrivenFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
