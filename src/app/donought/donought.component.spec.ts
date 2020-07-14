import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoughtComponent } from './donought.component';

describe('DonoughtComponent', () => {
  let component: DonoughtComponent;
  let fixture: ComponentFixture<DonoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
