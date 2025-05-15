import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { RouterModule } from "@angular/router";
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PlatformComponent } from './platform/platform.component';
import { FeaturedComponent } from './featured/featured.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ConnectComponent } from './connect/connect.component';
import { HeroComponent } from './hero/hero.component';
import { SaralDiscountComponent } from "./saral-discount/saral-discount.component";
import { LandingServicesComponent } from './landing-services/landing-services.component';

@NgModule({
  declarations: [
    LandingHeaderComponent,
    LandingFooterComponent,
    TestimonialsComponent,
    PlatformComponent,
    FeaturedComponent,
    OurWorksComponent,
    FaqsComponent,
    ConnectComponent,
    HeroComponent,
    SaralDiscountComponent,
    OurWorksComponent,
    LandingServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LandingHeaderComponent,
    LandingFooterComponent,
    TestimonialsComponent,
    HeroComponent,
    FeaturedComponent,
    SaralDiscountComponent,
    OurWorksComponent,
    ConnectComponent,
    LandingServicesComponent
  ]
})
export class SharedModule { }
