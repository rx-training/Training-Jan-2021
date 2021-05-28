import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsd15assignComponent } from './jsd15assign.component';

describe('Jsd15assignComponent', () => {
  let component: Jsd15assignComponent;
  let fixture: ComponentFixture<Jsd15assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jsd15assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsd15assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
