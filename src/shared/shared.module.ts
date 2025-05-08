import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConnectComponent } from './connect/connect.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OurworksComponent } from './ourworks/ourworks.component';
import { PlatformComponent } from './platform/platform.component';
import { SaraldiscountComponent } from './saraldiscount/saraldiscount.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConnectComponent,
    FaqsComponent,
    PlatformComponent,
    SaraldiscountComponent,
    FeaturedComponent,
    OurworksComponent,
    TestimonialsComponent,
    ServicesComponent,
    ProtfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConnectComponent,
    FaqsComponent,
    PlatformComponent,
    SaraldiscountComponent,
    FeaturedComponent,
    OurworksComponent, 
    TestimonialsComponent,
    ServicesComponent,
    ProtfolioComponent
  ]
})
export class SharedModule { }
