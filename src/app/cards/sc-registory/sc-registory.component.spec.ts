import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScRegistoryComponent } from './sc-registory.component';

describe('ScRegistoryComponent', () => {
  let component: ScRegistoryComponent;
  let fixture: ComponentFixture<ScRegistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScRegistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScRegistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
