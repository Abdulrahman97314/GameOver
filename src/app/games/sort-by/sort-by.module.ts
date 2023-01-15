import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortByRoutingModule } from './sort-by-routing.module';
import { SortByComponent } from './sort-by/sort-by.component';
import { PlatformPipe } from './platform.pipe';


@NgModule({
  declarations: [
    SortByComponent,
    PlatformPipe
  ],
  imports: [
    CommonModule,
    SortByRoutingModule
  ]
})
export class SortByModule { }
