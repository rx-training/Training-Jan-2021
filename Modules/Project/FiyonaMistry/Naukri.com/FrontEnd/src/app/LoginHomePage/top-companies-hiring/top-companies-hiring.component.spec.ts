import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompaniesHiringComponent } from './top-companies-hiring.component';

describe('TopCompaniesHiringComponent', () => {
  let component: TopCompaniesHiringComponent;
  let fixture: ComponentFixture<TopCompaniesHiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCompaniesHiringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCompaniesHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
