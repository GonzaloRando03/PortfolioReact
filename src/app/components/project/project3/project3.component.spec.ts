import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project3Component } from './project3.component';

describe('Project3Component', () => {
  let component: Project3Component;
  let fixture: ComponentFixture<Project3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
