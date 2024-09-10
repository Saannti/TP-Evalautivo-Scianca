import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravelComponent } from './gravel.component';

describe('GravelComponent', () => {
  let component: GravelComponent;
  let fixture: ComponentFixture<GravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GravelComponent]
    });
    fixture = TestBed.createComponent(GravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
