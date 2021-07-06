import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactangleComponent } from './ractangle.component';

describe('RactangleComponent', () => {
  let component: RactangleComponent;
  let fixture: ComponentFixture<RactangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RactangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RactangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
