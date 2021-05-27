import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSComponent } from './js.component';

describe('JSComponent', () => {
  let component: JSComponent;
  let fixture: ComponentFixture<JSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
