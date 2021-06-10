import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js18assingmentComponent } from './js18assingment.component';

describe('Js18assingmentComponent', () => {
  let component: Js18assingmentComponent;
  let fixture: ComponentFixture<Js18assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js18assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js18assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
