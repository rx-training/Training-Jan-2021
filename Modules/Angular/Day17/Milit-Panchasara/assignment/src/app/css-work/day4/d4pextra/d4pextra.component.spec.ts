import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D4pextraComponent } from './d4pextra.component';

describe('D4pextraComponent', () => {
  let component: D4pextraComponent;
  let fixture: ComponentFixture<D4pextraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D4pextraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D4pextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
