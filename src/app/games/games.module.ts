import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AllComponent } from './all/all.component';
import { PlatformPipe1 } from './platform.pipe';


@NgModule({
  declarations: [
    AllComponent,
    PlatformPipe1
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
