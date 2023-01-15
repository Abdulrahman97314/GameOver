import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsRoutingModule } from './platforms-routing.module';
import { PlatformComponent } from './platform/platform.component';
import { Platform2Pipe } from './platform.pipe';

@NgModule({
  declarations: [
    PlatformComponent,
    Platform2Pipe
  ],
  imports: [
    CommonModule,
    PlatformsRoutingModule
  ]
})
export class PlatformsModule { }
