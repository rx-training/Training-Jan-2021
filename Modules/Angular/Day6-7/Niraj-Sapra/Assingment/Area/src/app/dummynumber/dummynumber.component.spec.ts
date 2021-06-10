import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummynumberComponent } from './dummynumber.component';

describe('DummynumberComponent', () => {
  let component: DummynumberComponent;
  let fixture: ComponentFixture<DummynumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummynumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummynumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
