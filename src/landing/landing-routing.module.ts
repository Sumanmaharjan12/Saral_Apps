import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {CareerComponent} from "./career/career.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ServicesComponent} from "./services/services.component";

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent,
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'career',
    component: CareerComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
