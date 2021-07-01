import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js17assingmentComponent } from './js17assingment.component';

describe('Js17assingmentComponent', () => {
  let component: Js17assingmentComponent;
  let fixture: ComponentFixture<Js17assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js17assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js17assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
