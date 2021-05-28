import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowwithhiddenComponent } from './overflowwithhidden.component';

describe('OverflowwithhiddenComponent', () => {
  let component: OverflowwithhiddenComponent;
  let fixture: ComponentFixture<OverflowwithhiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowwithhiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverflowwithhiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
