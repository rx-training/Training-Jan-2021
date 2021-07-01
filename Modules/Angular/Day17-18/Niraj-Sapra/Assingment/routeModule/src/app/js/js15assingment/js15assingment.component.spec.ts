import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Js15assingmentComponent } from './js15assingment.component';

describe('Js15assingmentComponent', () => {
  let component: Js15assingmentComponent;
  let fixture: ComponentFixture<Js15assingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Js15assingmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Js15assingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
