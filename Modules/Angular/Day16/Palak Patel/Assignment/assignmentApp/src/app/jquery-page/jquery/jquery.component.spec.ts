import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JQueryComponent } from './jquery.component';

describe('JQueryComponent', () => {
  let component: JQueryComponent;
  let fixture: ComponentFixture<JQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
