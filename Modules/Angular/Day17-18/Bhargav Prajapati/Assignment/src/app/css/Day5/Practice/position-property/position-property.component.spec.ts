import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionPropertyComponent } from './position-property.component';

describe('PositionPropertyComponent', () => {
  let component: PositionPropertyComponent;
  let fixture: ComponentFixture<PositionPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
