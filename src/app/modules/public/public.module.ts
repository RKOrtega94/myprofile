import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule, NgxTypedJsModule],
})
export class PublicModule {}
