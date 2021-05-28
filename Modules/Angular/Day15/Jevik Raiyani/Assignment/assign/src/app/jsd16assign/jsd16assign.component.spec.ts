import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsd16assignComponent } from './jsd16assign.component';

describe('Jsd16assignComponent', () => {
  let component: Jsd16assignComponent;
  let fixture: ComponentFixture<Jsd16assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jsd16assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsd16assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
