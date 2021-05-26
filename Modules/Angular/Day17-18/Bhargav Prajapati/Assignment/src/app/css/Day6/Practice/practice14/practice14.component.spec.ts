import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice14Component } from './practice14.component';

describe('Practice14Component', () => {
  let component: Practice14Component;
  let fixture: ComponentFixture<Practice14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
