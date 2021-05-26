import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D6pextraComponent } from './d6pextra.component';

describe('D6pextraComponent', () => {
  let component: D6pextraComponent;
  let fixture: ComponentFixture<D6pextraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D6pextraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D6pextraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
