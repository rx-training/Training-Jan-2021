import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowwithscrollComponent } from './overflowwithscroll.component';

describe('OverflowwithscrollComponent', () => {
  let component: OverflowwithscrollComponent;
  let fixture: ComponentFixture<OverflowwithscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowwithscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowwithscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
