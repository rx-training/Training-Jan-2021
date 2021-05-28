import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGForComponent } from './ngfor.component';

describe('NGForComponent', () => {
  let component: NGForComponent;
  let fixture: ComponentFixture<NGForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
