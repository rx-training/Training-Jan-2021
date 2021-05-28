import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd5assignComponent } from './cssd5assign.component';

describe('Cssd5assignComponent', () => {
  let component: Cssd5assignComponent;
  let fixture: ComponentFixture<Cssd5assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd5assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssd5assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
