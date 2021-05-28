import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd7assignComponent } from './cssd7assign.component';

describe('Cssd7assignComponent', () => {
  let component: Cssd7assignComponent;
  let fixture: ComponentFixture<Cssd7assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd7assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssd7assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
