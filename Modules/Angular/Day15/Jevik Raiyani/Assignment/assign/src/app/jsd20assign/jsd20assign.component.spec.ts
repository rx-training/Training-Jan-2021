import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsd20assignComponent } from './jsd20assign.component';

describe('Jsd20assignComponent', () => {
  let component: Jsd20assignComponent;
  let fixture: ComponentFixture<Jsd20assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jsd20assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsd20assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
