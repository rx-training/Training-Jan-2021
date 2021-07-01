import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceINfoComponent } from './spice-info.component';

describe('SpiceINfoComponent', () => {
  let component: SpiceINfoComponent;
  let fixture: ComponentFixture<SpiceINfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiceINfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiceINfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
