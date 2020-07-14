import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solar4Component } from './solar4.component';

describe('Solar4Component', () => {
  let component: Solar4Component;
  let fixture: ComponentFixture<Solar4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solar4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
