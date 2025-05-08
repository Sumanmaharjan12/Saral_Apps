import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraldiscountComponent } from './saraldiscount.component';

describe('SaraldiscountComponent', () => {
  let component: SaraldiscountComponent;
  let fixture: ComponentFixture<SaraldiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaraldiscountComponent]
    });
    fixture = TestBed.createComponent(SaraldiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
