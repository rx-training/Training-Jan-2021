import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDynamicFormComponent } from './build-dynamic-form.component';

describe('BuildDynamicFormComponent', () => {
  let component: BuildDynamicFormComponent;
  let fixture: ComponentFixture<BuildDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
