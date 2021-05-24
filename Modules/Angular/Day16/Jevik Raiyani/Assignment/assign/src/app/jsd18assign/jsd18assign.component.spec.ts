import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsd18assignComponent } from './jsd18assign.component';

describe('Jsd18assignComponent', () => {
  let component: Jsd18assignComponent;
  let fixture: ComponentFixture<Jsd18assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jsd18assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsd18assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
