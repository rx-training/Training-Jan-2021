import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSkillComponent } from './top-skill.component';

describe('TopSkillComponent', () => {
  let component: TopSkillComponent;
  let fixture: ComponentFixture<TopSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
