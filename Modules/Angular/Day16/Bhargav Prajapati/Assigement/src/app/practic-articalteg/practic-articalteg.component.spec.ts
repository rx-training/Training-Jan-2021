import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticArticaltegComponent } from './practic-articalteg.component';

describe('PracticArticaltegComponent', () => {
  let component: PracticArticaltegComponent;
  let fixture: ComponentFixture<PracticArticaltegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticArticaltegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticArticaltegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
