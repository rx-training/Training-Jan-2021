import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd4assignComponent } from './cssd4assign.component';

describe('Cssd4assignComponent', () => {
  let component: Cssd4assignComponent;
  let fixture: ComponentFixture<Cssd4assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd4assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssd4assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
