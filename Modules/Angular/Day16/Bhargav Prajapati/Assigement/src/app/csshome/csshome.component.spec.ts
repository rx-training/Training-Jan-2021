import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSHOMEComponent } from './csshome.component';

describe('CSSHOMEComponent', () => {
  let component: CSSHOMEComponent;
  let fixture: ComponentFixture<CSSHOMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSHOMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSHOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
