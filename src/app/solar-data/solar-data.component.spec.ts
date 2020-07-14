import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarDataComponent } from './solar-data.component';

describe('SolarDataComponent', () => {
  let component: SolarDataComponent;
  let fixture: ComponentFixture<SolarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
