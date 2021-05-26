import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalPropertiesComponent } from './universal-properties.component';

describe('UniversalPropertiesComponent', () => {
  let component: UniversalPropertiesComponent;
  let fixture: ComponentFixture<UniversalPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
