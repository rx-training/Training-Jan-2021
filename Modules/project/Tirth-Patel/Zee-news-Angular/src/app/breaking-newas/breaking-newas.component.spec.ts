import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingNewasComponent } from './breaking-newas.component';

describe('BreakingNewasComponent', () => {
  let component: BreakingNewasComponent;
  let fixture: ComponentFixture<BreakingNewasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingNewasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
