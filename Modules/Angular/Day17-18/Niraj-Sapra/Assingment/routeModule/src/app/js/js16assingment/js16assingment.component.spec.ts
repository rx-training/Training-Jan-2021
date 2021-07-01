import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js16assingmentComponent } from './js16assingment.component';

describe('Js16assingmentComponent', () => {
  let component: Js16assingmentComponent;
  let fixture: ComponentFixture<Js16assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js16assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js16assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
