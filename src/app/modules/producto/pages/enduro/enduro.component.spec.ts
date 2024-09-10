import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduroComponent } from './enduro.component';

describe('EnduroComponent', () => {
  let component: EnduroComponent;
  let fixture: ComponentFixture<EnduroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnduroComponent]
    });
    fixture = TestBed.createComponent(EnduroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
