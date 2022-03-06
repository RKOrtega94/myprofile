import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule, NgxTypedJsModule],
})
export class PublicModule {}
