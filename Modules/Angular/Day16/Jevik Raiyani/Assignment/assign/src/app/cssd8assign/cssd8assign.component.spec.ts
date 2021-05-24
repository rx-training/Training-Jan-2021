import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssd8assignComponent } from './cssd8assign.component';

describe('Cssd8assignComponent', () => {
  let component: Cssd8assignComponent;
  let fixture: ComponentFixture<Cssd8assignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssd8assignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cssd8assignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
