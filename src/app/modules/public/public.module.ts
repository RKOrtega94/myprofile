import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ResumeComponent, PortfolioComponent, ServicesComponent, ContactComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule, NgxTypedJsModule],
})
export class PublicModule {}
