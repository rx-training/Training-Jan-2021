import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEmployersComponent } from './top-employers.component';

describe('TopEmployersComponent', () => {
  let component: TopEmployersComponent;
  let fixture: ComponentFixture<TopEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopEmployersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
