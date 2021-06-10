import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentsComponent } from './perents.component';

describe('PerentsComponent', () => {
  let component: PerentsComponent;
  let fixture: ComponentFixture<PerentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
