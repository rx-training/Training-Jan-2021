import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceContectComponent } from './spice-contect.component';

describe('SpiceContectComponent', () => {
  let component: SpiceContectComponent;
  let fixture: ComponentFixture<SpiceContectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiceContectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiceContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
