import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbatComponent } from './leftbat.component';

describe('LeftbatComponent', () => {
  let component: LeftbatComponent;
  let fixture: ComponentFixture<LeftbatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftbatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
