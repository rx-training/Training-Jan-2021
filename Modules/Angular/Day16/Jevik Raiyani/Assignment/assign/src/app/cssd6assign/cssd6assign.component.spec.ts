import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd6assignComponent } from './cssd6assign.component';

describe('Cssd6assignComponent', () => {
  let component: Cssd6assignComponent;
  let fixture: ComponentFixture<Cssd6assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd6assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssd6assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
