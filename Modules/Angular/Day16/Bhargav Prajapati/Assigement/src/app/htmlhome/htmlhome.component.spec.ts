import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLHOMEComponent } from './htmlhome.component';

describe('HTMLHOMEComponent', () => {
  let component: HTMLHOMEComponent;
  let fixture: ComponentFixture<HTMLHOMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLHOMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLHOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
