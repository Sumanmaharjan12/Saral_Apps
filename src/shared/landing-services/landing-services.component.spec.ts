import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServicesComponent } from './landing-services.component';

describe('LandingServicesComponent', () => {
  let component: LandingServicesComponent;
  let fixture: ComponentFixture<LandingServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingServicesComponent]
    });
    fixture = TestBed.createComponent(LandingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
