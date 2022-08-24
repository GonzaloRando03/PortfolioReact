import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1Component } from './project1.component';

describe('Project1Component', () => {
  let component: Project1Component;
  let fixture: ComponentFixture<Project1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
