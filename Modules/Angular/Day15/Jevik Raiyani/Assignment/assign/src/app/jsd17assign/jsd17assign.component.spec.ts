import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsd17assignComponent } from './jsd17assign.component';

describe('Jsd17assignComponent', () => {
  let component: Jsd17assignComponent;
  let fixture: ComponentFixture<Jsd17assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jsd17assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsd17assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
