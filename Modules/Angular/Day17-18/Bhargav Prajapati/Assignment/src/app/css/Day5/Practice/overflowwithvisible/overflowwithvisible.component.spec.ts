import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowwithvisibleComponent } from './overflowwithvisible.component';

describe('OverflowwithvisibleComponent', () => {
  let component: OverflowwithvisibleComponent;
  let fixture: ComponentFixture<OverflowwithvisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowwithvisibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowwithvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
