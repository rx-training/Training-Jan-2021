import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbindingTemplateComponent } from './bookbinding-template.component';

describe('BookbindingTemplateComponent', () => {
  let component: BookbindingTemplateComponent;
  let fixture: ComponentFixture<BookbindingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbindingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbindingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
