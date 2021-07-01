import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultComponent } from './facult.component';

describe('FacultComponent', () => {
  let component: FacultComponent;
  let fixture: ComponentFixture<FacultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
