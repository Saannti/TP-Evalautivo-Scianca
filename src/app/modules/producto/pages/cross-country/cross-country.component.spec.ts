import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossCountryComponent } from './cross-country.component';

describe('CrossCountryComponent', () => {
  let component: CrossCountryComponent;
  let fixture: ComponentFixture<CrossCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossCountryComponent]
    });
    fixture = TestBed.createComponent(CrossCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
