import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthoRizedComponent } from './un-autho-rized.component';

describe('UnAuthoRizedComponent', () => {
  let component: UnAuthoRizedComponent;
  let fixture: ComponentFixture<UnAuthoRizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAuthoRizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAuthoRizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
