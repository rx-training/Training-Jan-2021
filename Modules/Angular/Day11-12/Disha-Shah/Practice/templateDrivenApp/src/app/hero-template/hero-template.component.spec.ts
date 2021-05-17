import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTemplateComponent } from './hero-template.component';

describe('HeroTemplateComponent', () => {
  let component: HeroTemplateComponent;
  let fixture: ComponentFixture<HeroTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
