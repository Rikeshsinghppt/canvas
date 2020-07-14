import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solar3Component } from './solar3.component';

describe('Solar3Component', () => {
  let component: Solar3Component;
  let fixture: ComponentFixture<Solar3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solar3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
