import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaralDiscountComponent } from './saral-discount.component';

describe('SaralDiscountComponent', () => {
  let component: SaralDiscountComponent;
  let fixture: ComponentFixture<SaralDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaralDiscountComponent]
    });
    fixture = TestBed.createComponent(SaralDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
