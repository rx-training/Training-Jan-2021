import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JAVASCRIPTComponent } from './javascript.component';

describe('JAVASCRIPTComponent', () => {
  let component: JAVASCRIPTComponent;
  let fixture: ComponentFixture<JAVASCRIPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JAVASCRIPTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JAVASCRIPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
