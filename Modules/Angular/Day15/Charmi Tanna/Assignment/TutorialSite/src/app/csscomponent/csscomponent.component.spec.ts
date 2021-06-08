import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSComponentComponent } from './csscomponent.component';

describe('CSSComponentComponent', () => {
  let component: CSSComponentComponent;
  let fixture: ComponentFixture<CSSComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
