import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarvolageComponent } from './solarvolage.component';

describe('SolarvolageComponent', () => {
  let component: SolarvolageComponent;
  let fixture: ComponentFixture<SolarvolageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarvolageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarvolageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
